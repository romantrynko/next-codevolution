import Link from 'next/link';
import React from 'react';

const PostList = ({ posts }) => {
  return (
    <>
      <h1>Posts list</h1>
      {posts.map(({ id, title, body }) => {
        return (
          <div key={id}>
            <Link href={`/posts/${id}`}>
              <h2>{title}</h2>
            </Link>
            <p>{body}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default PostList;

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data
    }
  };
};
