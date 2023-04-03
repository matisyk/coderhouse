import getProducts, { Product } from '@/asyncMock';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await getProducts();
      setProducts(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <Typography variant="h2">{greeting}</Typography>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
