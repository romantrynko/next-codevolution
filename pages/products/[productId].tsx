import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>Product-{product.id} details</title>
      </Head>
      <h1>Product details</h1>
      <div className={styles.product} onClick={() => router.push('/')}>
        <h2>
          {product.id}. {product.title} - {product.price}$
        </h2>
        <p>{product.description}</p>
      </div>
    </>
  );
};

export default Product;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { productId } = params;

  const response = await fetch(`http://localhost:4000/products/${productId}`);
  const data = await response.json();

  return {
    props: {
      product: data
    },
    revalidate: 5
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true
  };
};
