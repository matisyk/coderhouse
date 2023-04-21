import { CartProvider } from '@/context/CartContext';
import type { AppProps } from 'next/app';
import Layout from '../../components/NavBar/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
