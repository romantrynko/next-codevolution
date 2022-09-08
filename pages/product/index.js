import Link from 'next/link';
import React from 'react';

const ProductList = ({productId = 100}) => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/product/1">
        <h2>Product 1</h2>
      </Link>
      <Link href="/product/2">
        <h2>Product 2</h2>
      </Link>
      <Link href="/product/3" replace>
        <h2>Product 3</h2>
      </Link>
      <Link href={`/product/${productId}`}>
        <h2>Product {productId}</h2>
      </Link>
    </>
  );
};

export default ProductList;
