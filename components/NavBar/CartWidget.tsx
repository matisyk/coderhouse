import { CartContext } from '@/context/CartContext';
import styled from '@emotion/styled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { useContext } from 'react';

interface CartWidgetProps {}

const CartWidget: React.FC<CartWidgetProps> = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Typography>
        <Link href="/cart">
          <WhiteLink>
            <ShoppingCartIcon />
            {cart.length}
          </WhiteLink>
        </Link>
      </Typography>
    </>
  );
};

export default CartWidget;

const WhiteLink = styled.a`
  color: white;
  font-size: medium;
`;
