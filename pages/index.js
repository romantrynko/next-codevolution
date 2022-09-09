import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div className="nav-menu">
        <Link href="/news">
          <a>News</a>
        </Link>

        <Link href="/users">
          <a>Users</a>
        </Link>

        <Link href="/posts">
          <a>Posts</a>
        </Link>

        <Link href="/products">
          <a>Products</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
