import React, { ReactNode } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';

import 'styles/globals.css';
import { AppProps } from 'next/app';
import { Page } from '../types/page';

type Props = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps }: Props) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
