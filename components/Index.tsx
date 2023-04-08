import { useState } from 'react';
import Item from './Item/Item';
import NavBar from './NavBar/NavBar';

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const [quantity, setQuantity] = useState(0);
  const [quantityInCart, setQuantityInCart] = useState(0);

  return (
    <>
      <NavBar quantityInCart={quantityInCart} />
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
