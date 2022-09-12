import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  const pageName = pathname.split('/')[1].toUpperCase();

  return (
    <Layout>
      <div className="header">
        <h2 className="title" onClick={() => router.push('/events')}>
          {pageName.length ? pageName : 'Next.js CRUD App'}
        </h2>
        {pathname !== '/' && (
          <button className="button" onClick={() => router.push('/')}>
            &larr;
          </button>
        )}
      </div>
      <div className="filler"></div>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// export const getStaticProps = async ({ params }) => {
//   const { query } = params
//   console.log(query);
//   return {
//     props: {
//       query
//     }
//   }
// }
