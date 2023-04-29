import { Product } from '@/lib/models/Product';
import { db } from '@/services/firebase/firebaseConfig';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import ItemListContainer from './ItemList/ItemListContainer';

interface ItemProps {}

const getProducts = async (): Promise<Product[]> => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  return querySnapshot.docs.map((doc) => doc.data() as Product);
};

const Item: React.FC<ItemProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await getProducts();
      setProducts(result);
      setIsLoading(false);
    };
    fetchData();
  }, []);

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

  return (
    <>
      <ItemListContainer greeting={'Bienvenidos'} />
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        flexWrap="wrap"
      >
        <ItemList products={products} />
      </Stack>
    </>
  );
};

export default Item;
