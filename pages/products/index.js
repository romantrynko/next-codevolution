import { useRouter } from 'next/router';
import styles from './styles.module.css';

const ProductList = ({ products }) => {
  const router = useRouter();

  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div
            className={styles.product}
            key={product.id}
            onClick={() => router.push(`/products/${product.id}`)}
          >
            <h2>
              {product.id}. {product.title} - {product.price}$
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;

export const getStaticProps = async () => {
  console.log('Generating or regenerating products list');
  const response = await fetch(`http://localhost:4000/products`);
  const data = await response.json();

  return {
    props: {
      products: data
    },
    revalidate: 5
  };
};
