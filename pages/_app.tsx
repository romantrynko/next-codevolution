import React, { ReactNode } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import 'styles/globals.css';
import { AppProps } from 'next/app';
import { Page } from '../types/page';
import { getSession, SessionProvider } from 'next-auth/react';
import { GetServerSideProps } from 'next';

type Props = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: Props) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
