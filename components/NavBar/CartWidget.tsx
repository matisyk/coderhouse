import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';

interface CartWidgetProps {}

const CartWidget: React.FC<CartWidgetProps> = () => {
  return (
    <>
      <Typography>
        <ShoppingCartIcon />1
      </Typography>
    </>
  );
};

export default CartWidget;
