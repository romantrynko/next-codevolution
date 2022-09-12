import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <div className="header">
        <button className="sort-button" onClick={() => router.push('/')}>
          Home
        </button>
        <h2>Layout header</h2>
      </div>
      <div className="filler"></div>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
