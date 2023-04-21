import { CartContext } from '@/context/CartContext';
import { Typography } from '@mui/material';
import { useContext } from 'react';

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Typography>{cart.length < 1 ? null : cart.length}</Typography>
    </>
  );
};

export default Cart;
