import Link from 'next/link';
import { navs } from '../assets/constants';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div className="nav-menu">
      {navs.map(({ name, href }) => {
        return (
          <>
            <Link href={href} key={name}>
              <a>{name}</a>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Home;

Home.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
