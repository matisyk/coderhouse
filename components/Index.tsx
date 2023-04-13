import { useState } from 'react';
import Item from './Item/Item';

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const [quantity, setQuantity] = useState(0);
  const [quantityInCart, setQuantityInCart] = useState(0);

  return (
    <>
      <Item
        quantity={quantity}
        setQuantity={setQuantity}
        setQuantityInCart={setQuantityInCart}
        quantityInCart={quantityInCart}
      />
    </>
  );
};

export default Index;
