import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

const Post = ({ post }) => {
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths= async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const posts = await response.json();

  const paths = posts.map((post) => ({ params: { postId: `${post.id}` } }));

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { postId } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post: data
    }
  };
};
