import NavBar from '@/nav-bar';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import Footer from '../components/footer/Footer';

const Home = () => {
  const { data, status } = useSession();

  if (status === 'loading') return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="My app" content="CRUD with some functionality and styles" />
      </Head>
      <NavBar />
    </>
  );
};

export default Home;

// type PageLayoutProps = {
//   children: ReactNode,
// };

// Home.getLayout = function PageLayout(page: PageLayoutProps) {
//   return (
//     <>
//       {page}
//       <Footer />
//     </>
//   );
// };
