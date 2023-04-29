import { Product } from '@/lib/models/Product';
import styled from '@emotion/styled';
import { Paper, Stack, styled as style, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type T = {
  products: Product[];
};

const ItemList = ({ products }: T) => {
  return (
    <>
      {products.map((product) => (
        <Stack
          key={product.id}
          paddingBottom={{ xs: '2rem' }}
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
            <Link href={`/item/${product.id}`}>
              <WhiteLink>View detail</WhiteLink>
            </Link>
          </Item>
        </Stack>
      ))}
    </>
  );
};

export default ItemList;

const Item = style(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const WhiteLink = styled.a`
  color: grey;
  font-size: medium;
  text-decoration: none;
`;
