import { getProducts } from '@/asyncMock';
import { Product } from '@/lib/models/Product';
import styled from '@emotion/styled';
import { Paper, Stack, Typography, styled as style } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ItemFilter = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.category === category
        );
        setProducts(filteredProducts);
      })
      .catch((error) => console.log(error));
  }, [category]);

  if (!products.length) {
    return (
      <Typography variant="h2" textAlign="center">
        Loading...
      </Typography>
    );
  }

  return (
    <div>
      <Typography variant="h2" textAlign="center">
        {category}
      </Typography>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={5}
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        {products.map((product) => (
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-arround"
            alignItems="center"
            spacing={1}
            key={product.id}
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
      </Stack>
    </div>
  );
};

export default ItemFilter;

const Item = style(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const WhiteLink = styled.a`
  color: grey;
  font-size: medium;
  text-decoration: none;
`;
