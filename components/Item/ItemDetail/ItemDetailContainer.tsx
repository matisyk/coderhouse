import { getProductById } from '@/asyncMock';
import { Product } from '@/lib/models/Product';
import { Button, Paper, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ItemDetailContainer() {
  const [quantity, setQuantity] = useState(0);
  const [quantityInCart, setQuantityInCart] = useState(0);

  const router = useRouter();
  const id = router.query.id ?? '0';
  const numberId: number = +id.toString();

  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );

  useEffect(() => {
    getProductById(numberId).then((product) => {
      setSelectedProduct(product);
    });
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
  };

  if (!selectedProduct) {
    return (
      <Typography variant="h2" textAlign="center">
        Loading...
      </Typography>
    );
  }

  const { name, description, price, img } = selectedProduct;
  return (
    <>
      <Stack display="flex" direction="row" justifyContent="center" p={4}>
        <ItemStyled>
          <Image src={img} alt={name} width={170} height={170} />
          <Typography variant="h4" color="#3366CC">
            {name}
          </Typography>
          <Typography>{price} ETH</Typography>
          <Typography>{description}</Typography>
          {quantityInCart > 0 ? (
            <Stack p="1rem">
              <Link href="/cart">Finish order</Link>
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
                <Button onClick={handleIncrement}>+</Button>
              </Stack>
              <Stack>
                <Button onClick={handleAddCart}>Add to cart</Button>
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
  width: '30%',
}));
