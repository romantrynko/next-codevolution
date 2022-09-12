import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <div className="header">
        <button className="button" onClick={() => router.push('/')}>
          Home
        </button>
        <h2 className="title" onClick={() => router.push('/events')}>
          Next.js CRUD App
        </h2>
      </div>
      <div className="filler"></div>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
