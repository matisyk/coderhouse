import { CartContext } from '@/context/CartContext';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useContext } from 'react';

interface CheckoutProps {}

const CheckoutForm: React.FC<CheckoutProps> = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <>
      <Typography variant="h3" textAlign="center" p="1rem">
        Checkout
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        p="1rem"
      >
        <Stack width={{ xs: '70%', sm: '40%', md: '20%' }} paddingBottom="2rem">
          <TextField
            type="text"
            required
            label="Nombre"
            placeholder="Juan Perez"
            multiline
            variant="standard"
          />
        </Stack>
        <Stack width={{ xs: '70%', sm: '40%', md: '20%' }} paddingBottom="2rem">
          <TextField
            type="number"
            required
            label="Telefono"
            placeholder="1109876543"
            multiline
            variant="standard"
          />
        </Stack>
        <Stack width={{ xs: '70%', sm: '40%', md: '20%' }} paddingBottom="2rem">
          <TextField
            type="email"
            required
            label="Email"
            placeholder="juan@gmail.com"
            multiline
            variant="standard"
          />
        </Stack>
        <Stack>
          <Typography textAlign="center" paddingBottom="2rem" variant="h3">
            Total {total} ETH
          </Typography>
        </Stack>
        <Stack>
          <Button variant="contained" disabled={total == 0}>
            Confirm order
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default CheckoutForm;
