import { CartContext } from '@/context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useContext } from 'react';

interface CartWidgetProps {}

const CartWidget: React.FC<CartWidgetProps> = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Typography>
        <Link href="/cart">
          <Button variant="contained">
            <ShoppingCartIcon />
            {cart.length}
          </Button>
        </Link>
      </Typography>
    </>
  );
};

export default CartWidget;
