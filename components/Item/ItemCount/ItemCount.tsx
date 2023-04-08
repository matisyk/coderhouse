import { Button, Stack, Typography } from '@mui/material';

interface ItemCountProps {
  stock: number;
  quantity: number;
  setQuantity: (val: number) => void;
  setQuantityInCart: (val: number) => void;
  quantityInCart: number;
}

const ItemCount: React.FC<ItemCountProps> = ({
  stock,
  quantity,
  setQuantity,
  setQuantityInCart,
  quantityInCart,
}) => {
  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
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

  return (
    <>
      <Stack display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
        <Button onClick={handleDecrement}>-</Button>
        <Typography variant="h4" textAlign="center">
          {quantity}
        </Typography>
        <Button onClick={handleIncrement}>+</Button>
      </Stack>
      <Stack>
        <Button onClick={handleAddCart} disabled={quantity === quantityInCart}>
          {quantityInCart <= quantity ? 'Add to cart' : 'Remove'}
        </Button>
      </Stack>
    </>
  );
};

export default ItemCount;
