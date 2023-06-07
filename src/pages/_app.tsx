import MainLayout from '@/layouts/Main';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
);

export default MyApp;
