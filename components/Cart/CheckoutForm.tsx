import { CartContext } from '@/context/CartContext';
import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useContext, useState } from 'react';

interface OrderData {
  name: string;
  phone: string;
  email: string;
}
interface CheckoutFormProps {
  onConfirm: (userData: OrderData) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleConfirm = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

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
        <form onSubmit={handleConfirm}>
          <FormControl>
            <Stack paddingBottom="2rem">
              <TextField
                type="text"
                required
                label="Name"
                placeholder="Juan Perez"
                multiline
                variant="standard"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </Stack>
            <Stack paddingBottom="2rem">
              <TextField
                type="number"
                required
                label="Phone"
                placeholder="1109876543"
                multiline
                variant="standard"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </Stack>
            <Stack paddingBottom="2rem">
              <TextField
                type="email"
                required
                label="Email"
                placeholder="juan@gmail.com"
                multiline
                variant="standard"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </Stack>
            <Stack>
              <Typography textAlign="center" paddingBottom="2rem" variant="h3">
                Total {total} ETH
              </Typography>
            </Stack>
            <Stack>
              <Button type="submit" variant="contained" disabled={total == 0}>
                Confirm order
              </Button>
            </Stack>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default CheckoutForm;
