import { CartContext } from '@/context/CartContext';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Paper, Stack, Typography, styled } from '@mui/material';
import { useContext } from 'react';

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Typography textAlign="center" p="1rem">
        {cart.length < 1 ? null : `Total items quantity ${cart.length}`}
      </Typography>
      {cart.map((item) => {
        return (
          <Stack key={item.id} paddingBottom="1rem">
            <ItemStyled>
              <Typography>{item.name}</Typography>
              <Typography>Quantity: {item.quantity}</Typography>
              <Typography>Price ea: {item.price} ETH</Typography>
              <Typography>Total: {item.quantity * item.price} ETH</Typography>
              <Button variant="contained">
                <CloseIcon />
              </Button>
            </ItemStyled>
          </Stack>
        );
      })}
      <Typography textAlign="center" p="1rem">
        Total {cart.reduce((acc, item) => acc + item.quantity * item.price, 0)}{' '}
        ETH
      </Typography>
      <Stack>
        <Button variant="outlined">
          Clean cart <DeleteIcon />
        </Button>
        <Button variant="contained">
          Checkout <ShoppingCartIcon />
        </Button>
      </Stack>
    </>
  );
};

export default Cart;

const ItemStyled = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'beige',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '95%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));
