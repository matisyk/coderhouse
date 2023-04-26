import { Typography } from '@mui/material';

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  return (
    <>
      <Typography textAlign="center" variant="h3" p="1rem">
        {greeting}
      </Typography>
    </>
  );
};

export default ItemListContainer;
