import { CartContext } from '@/context/CartContext';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Paper, Stack, Typography, styled } from '@mui/material';
import Link from 'next/link';
import { useContext } from 'react';

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  const handleRemoveItem = (id: number) => {
    removeItem(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (cart.length < 1) {
    return (
      <>
        <Typography variant="h2" textAlign="center" p="1rem">
          No Items in the cart yet
        </Typography>
        <Stack display="flex" alignItems="center" flexDirection="column">
          <Button variant="outlined">
            <Link href="/">Go back home</Link>
          </Button>
        </Stack>
      </>
    );
  } else {
    return (
      <>
        <Typography textAlign="center" p="1rem" variant="h3">
          Total cart items {totalCartItems}
        </Typography>
        {cart.map((item) => {
          return (
            <Stack key={item.id} paddingBottom="1rem">
              <ItemStyled>
                <Typography>{item.name}</Typography>
                <Typography>Quantity: {item.quantity}</Typography>
                <Typography>Price ea: {item.price} ETH</Typography>
                <Typography>Total: {item.quantity * item.price} ETH</Typography>
                <Button
                  variant="contained"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <CloseIcon />
                </Button>
              </ItemStyled>
            </Stack>
          );
        })}
        <Typography textAlign="center" p="1rem" variant="h3">
          Total{' '}
          {cart.reduce((acc, item) => acc + item.quantity * item.price, 0)} ETH
        </Typography>
        <Stack display="flex" alignItems="center" flexDirection="column">
          <Stack paddingBottom="1rem" width="adjust">
            <Button variant="outlined" onClick={handleClearCart}>
              Clear cart <DeleteIcon />
            </Button>
          </Stack>
          <Stack width="adjust">
            <Button variant="contained">
              <Link href="/checkout">
                Checkout <ShoppingCartIcon />
              </Link>
            </Button>
          </Stack>
        </Stack>
      </>
    );
  }
};

export default Cart;

const ItemStyled = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'beige',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));
