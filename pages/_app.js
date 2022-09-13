import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </Layout>
  );
}

export default MyApp;
