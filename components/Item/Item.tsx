import ItemCount from './ItemCount';
import ItemListContainer from './ItemListContainer';

interface ItemProps {
  quantity: number;
  setQuantity: (val: number) => void;
  setQuantityInCart: (val: number) => void;
}

const Item: React.FC<ItemProps> = ({ quantity, setQuantity, setQuantityInCart }) => {
  return (
    <>
      <ItemCount
        stock={10}
        quantity={quantity}
        setQuantity={setQuantity}
        setQuantityInCart={setQuantityInCart}
      />
      <ItemListContainer greeting={'Bienvenidos'} />
    </>
  );
};

export default Item;
