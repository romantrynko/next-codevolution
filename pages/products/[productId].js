import { useRouter } from 'next/router';

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Product details</h1>
      <div className='product' onClick={() => router.push('/')}>
        <h2>
          {product.id}. {product.title} - {product.price}$
        </h2>
        <p>{product.description}</p>
      </div>
    </>
  );
};

export default Product;

export const getStaticProps = async (context) => {
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

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true
  };
};
