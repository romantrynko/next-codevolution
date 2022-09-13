import Head from 'next/head';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { navs } from '../assets/constants';
import Footer from '../components/footer/Footer';

type INavs = {
  name: string
  href: string
}

const Home = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="My app" content="CRUD with some functionality and styles" />
      </Head>
      <div className="nav-menu">
        {navs.map(({ name, href }: INavs) => {
          return (
            <>
              <Link href={href} key={name}>
                <a>{name}</a>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;

type PageLayoutProps = {
  children: ReactNode,
};

Home.getLayout = function PageLayout(page: PageLayoutProps) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
