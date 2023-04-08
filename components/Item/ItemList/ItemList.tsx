import { Product } from '@/lib/models/Product';
import { Button, Paper, Stack, styled, Typography } from '@mui/material';
import Image from 'next/image';

type T = {
  products: Product[];
};

const ItemList = ({ products }: T) => {
  return (
    <>
      {products.map((product) => (
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-arround"
          alignItems="center"
          spacing={1}
          key={product.id}
          maxWidth={window.innerWidth / 4}
        >
          <Item>
            <Image
              src={product.img}
              alt={product.name}
              width={170}
              height={170}
            />
            <Typography variant="h4" color="#3366CC">
              {product.name}
            </Typography>
            <Typography>{product.price} ETH</Typography>
            <Button>Ver detalle</Button>
          </Item>
        </Stack>
      ))}
    </>
  );
};

export default ItemList;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
