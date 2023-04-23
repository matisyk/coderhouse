import { getProducts } from '@/asyncMock';
import { Product } from '@/lib/models/Product';
import styled from '@emotion/styled';
import {
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  styled as style,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ItemFilter = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const checkIfProductsExist = async (category: string): Promise<boolean> => {
    const products = await getProducts();
    return products.some((product) => product.category === category);
  };

  useEffect(() => {
    checkIfProductsExist(category)
      .then((exists) => {
        if (exists) {
          return getProducts();
        } else {
          setShowMessage(true);
          return Promise.reject('No hay productos en esta categoría');
        }
      })
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.category === category
        );
        setProducts(filteredProducts);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category]);

  if (showMessage) {
    return (
      <>
        <Typography textAlign="center" variant="h2" p="1rem">
          Ooops! Nothing to see here yet
        </Typography>
        <Stack display="flex" alignItems="center" flexDirection="column">
          <Button variant="outlined">
            <Link href="/">Go back home</Link>
          </Button>
        </Stack>
      </>
    );
  }

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
    <div>
      <Typography variant="h2" textAlign="center" p="1rem">
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
