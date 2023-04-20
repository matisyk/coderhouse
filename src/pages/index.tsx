import CartProvider from '@/context/CartContext';
import Index from '../../components/Index';

export default function Home() {
  return (
    <>
      <CartProvider>
        <Index />
      </CartProvider>
    </>
  );
}
