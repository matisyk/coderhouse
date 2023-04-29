import { CartContext } from '@/context/CartContext';
import { Product } from '@/lib/models/Product';
import { db } from '@/services/firebase/firebaseConfig';
import {
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

const getProducts = async (): Promise<Product[]> => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  return querySnapshot.docs.map((doc) => doc.data() as Product);
};

export default function ItemDetailContainer() {
  const [quantity, setQuantity] = useState(0);
  const [quantityInCart, setQuantityInCart] = useState(0);

  const { addItem } = useContext(CartContext);

  const router = useRouter();
  const id = router.query.id ?? '0';
  const numberId: number = +id.toString();

  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );

  const checkIfProductsExist = async (id: number): Promise<boolean> => {
    const products = await getProducts();
    return products.some((product) => product.id === id);
  };

  useEffect(() => {
    checkIfProductsExist(numberId)
      .then((exists) => {
        if (exists) {
          return getProducts();
        } else {
          return Promise.reject('No hay productos en esta categoría');
        }
      })
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.id === numberId
        );
        setSelectedProduct(filteredProducts[0]);
      })
      .catch((error) => console.log(error));
  }, [numberId]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddCart = () => {
    setTimeout(() => {
      setQuantityInCart(quantity);
    }, 300);
    if (selectedProduct) {
      const item = {
        id: selectedProduct?.id,
        name: selectedProduct?.name,
        price: selectedProduct?.price,
        quantity: quantity,
      };
      addItem(item, quantity);
    }
  };

  if (!selectedProduct) {
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

  const { name, description, price, img, stock } = selectedProduct;
  return (
    <>
      <Stack
        display="flex"
        direction="row"
        p="2rem"
        justifyContent="center"
        width={{ sx: '100%', sm: '50%', md: '30%' }}
        margin="0 auto"
      >
        <ItemStyled>
          <Image src={img} alt={name} width={170} height={170} />
          <Typography variant="h4" color="#3366CC">
            {name}
          </Typography>
          <Typography>{price} ETH</Typography>
          <Typography>{description}</Typography>
          {quantityInCart > 0 ? (
            <Stack p="1rem">
              <Button variant="outlined">
                <Link href="/cart">Finish order</Link>
              </Button>
            </Stack>
          ) : (
            <>
              <Stack
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Button onClick={handleDecrement}>-</Button>
                <Typography variant="h4" textAlign="center">
                  {quantity}
                </Typography>
                <Button disabled={quantity >= stock} onClick={handleIncrement}>
                  +
                </Button>
              </Stack>
              <Stack>
                {quantity <= stock ? null : (
                  <Typography variant="h6" color="red">
                    Max stock exceeded
                  </Typography>
                )}
              </Stack>
              <Stack>
                <Button disabled={quantity == 0} onClick={handleAddCart}>
                  Add to cart
                </Button>
              </Stack>
            </>
          )}
        </ItemStyled>
      </Stack>
    </>
  );
}

const ItemStyled = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
