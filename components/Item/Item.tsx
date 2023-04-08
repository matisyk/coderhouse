import { getProductById, getProducts } from '@/asyncMock';
import { Product } from '@/lib/models/Product';
import { Paper, Stack, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import ItemCount from './ItemCount/ItemCount';
import ItemDetail from './ItemDetail/ItemDetail';
import ItemList from './ItemList/ItemList';
import ItemListContainer from './ItemList/ItemListContainer';

interface ItemProps {
  quantity: number;
  setQuantity: (val: number) => void;
  setQuantityInCart: (val: number) => void;
  quantityInCart: number;
}

const Item: React.FC<ItemProps> = ({
  quantity,
  setQuantity,
  setQuantityInCart,
  quantityInCart,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await getProducts();
      setProducts(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    getProductById(1).then((product) => {
      setSelectedProduct(product);
      console.log(product);
    });
  }, []);

  return (
    <>
      <ItemListContainer greeting={'Bienvenidos'} />
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={5}
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <ItemList products={products} />
      </Stack>
      <Stack
        p={5}
        display="flex"
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={5}
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <ItemStyled>
          <ItemDetail selectedProduct={selectedProduct} />
          <ItemCount
            stock={10}
            quantity={quantity}
            setQuantity={setQuantity}
            setQuantityInCart={setQuantityInCart}
            quantityInCart={quantityInCart}
          />
        </ItemStyled>
      </Stack>
    </>
  );
};

export default Item;

const ItemStyled = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
