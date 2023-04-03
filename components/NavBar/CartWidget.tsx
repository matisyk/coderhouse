import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';

interface CartWidgetProps {
  quantityInCart: number;
}

const CartWidget: React.FC<CartWidgetProps> = ({ quantityInCart }) => {
  return (
    <>
      <Typography>
        <ShoppingCartIcon />
        {quantityInCart}
      </Typography>
    </>
  );
};

export default CartWidget;
