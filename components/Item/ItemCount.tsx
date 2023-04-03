import { Button, Stack, Typography } from '@mui/material';

interface ItemCountProps {
  stock: number;
  quantity: number;
  setQuantity: (val: number) => void;
  setQuantityInCart: (val: number) => void;
}

const ItemCount: React.FC<ItemCountProps> = ({
  stock,
  quantity,
  setQuantity,
  setQuantityInCart,
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
    setQuantityInCart(quantity);
  };

  return (
    <>
      <Stack>
        <Button onClick={handleDecrement}>-</Button>
        <Typography variant="h4" textAlign="center">
          {quantity}
        </Typography>
        <Button onClick={handleIncrement}>+</Button>
      </Stack>
      <Stack>
        <Button onClick={handleAddCart} disabled={quantity == 0}>
          Add to cart
        </Button>
      </Stack>
    </>
  );
};

export default ItemCount;
