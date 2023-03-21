import { Typography } from '@mui/material';

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  return (
    <>
      <Typography variant="h2">{greeting}</Typography>
    </>
  );
};

export default ItemListContainer;
