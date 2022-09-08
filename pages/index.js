import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {

  const router = useRouter();


  const handleCkick = () => {
    router.replace('/product')
    alert('Successfull')
  }

  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
      <button onClick={handleCkick}>
        Place order
      </button>
    </div>
  );
};

export default Home;
