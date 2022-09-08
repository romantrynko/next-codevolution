import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  );
};

export default Home;
