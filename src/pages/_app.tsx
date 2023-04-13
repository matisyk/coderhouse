import type { AppProps } from 'next/app';
import Layout from '../../components/NavBar/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
