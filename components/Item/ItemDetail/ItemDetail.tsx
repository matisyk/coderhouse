import { Product } from '@/lib/models/Product';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

type ItemDetailProps = {
  selectedProduct?: Product;
};

const ItemDetail = ({ selectedProduct }: ItemDetailProps) => {
  if (!selectedProduct) {
    return <Typography>No product selected</Typography>;
  }

  const { name, description, price, img } = selectedProduct;
  return (
    <>
      <Stack
        display="flex"
        direction="column"
        justifyContent="space-arround"
        alignItems="center"
        spacing={1}
        maxWidth={window.innerWidth / 4}
      >
        <Image src={img} alt={name} width={170} height={170} />
        <Typography variant="h4" color="#3366CC">
          {name}
        </Typography>
        <Typography>{price} ETH</Typography>
        <Typography>{description}</Typography>
      </Stack>
    </>
  );
};

export default ItemDetail;
