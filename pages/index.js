import Link from 'next/link';
import { navs } from '../assets/constants';

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
