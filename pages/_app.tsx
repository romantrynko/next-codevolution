import Footer from '@/footer/Footer';
import Header from '@/header/Header';
import Layout from '@/layout/Layout';

import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
