import { Product } from '@/asyncMock';
import { Stack } from '@mui/material';
import Image from 'next/image';

type T = {
  products: Product[];
};

const ItemList = ({ products }: T) => {
  return (
    <>
      {products.map((product) => (
        <Stack key={product.id}>
          <Image src={product.img} alt={product.name} width={100} height={100}/>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </Stack>
      ))}
    </>
  );
};

export default ItemList;
