import Link from 'next/link';
import { useRouter } from 'next/router';
import Dashboard from './dashboard';

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <div className="nav-menu">
        <Link href="/news">
          <a>News</a>
        </Link>

        <Link href="/events">
          <a>Events</a>
        </Link>

        <Link href="/dashboard-swr">
          <a>DashboardSWR</a>
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
