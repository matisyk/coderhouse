import { CartContext } from '@/context/CartContext';
import { db } from '@/services/firebase/firebaseConfig';
import { CircularProgress, Stack, Typography } from '@mui/material';
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from 'firebase/firestore';
import { useContext, useState } from 'react';
import CheckoutForm from './CheckoutForm';

interface CheckoutProps {}

interface OrderData {
  name: string;
  phone: string;
  email: string;
}

const Checkout: React.FC<CheckoutProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, clearCart } = useContext(CartContext);

  const totalMath = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const createOrder = async ({ name, phone, email }: OrderData) => {
    setIsLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        date: new Date(),
        total: totalMath,
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id.toString());

      const productsRef = collection(db, 'products');

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), 'in', ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === +doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (prodQuantity) {
          if (stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, 'orders');

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.log('Some products are out of stock');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <Typography variant="h2" textAlign="center" p="1rem">
          Loading
          <Stack direction="row" justifyContent="center" p="1rem">
            <CircularProgress />
          </Stack>
        </Typography>
      </>
    );
  }

  if (orderId) {
    return (
      <Typography variant="h3" textAlign="center" p="1rem" fontSize="2rem !important" fontWeight="1 !important" >
        Order created successfully. Your order number is: {orderId}
      </Typography>
    );
  }

  return (
    <>
      <CheckoutForm onConfirm={createOrder} />
    </>
  );
};

export default Checkout;
