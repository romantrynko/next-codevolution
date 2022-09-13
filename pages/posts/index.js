import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css'

const PostList = ({ posts }) => {
  return (
    <>
      <h1>Posts list</h1>
      {posts.map(({ id, title, body }) => {
        return (
          <div className={styles.postCard} key={id}>
            <Link href={`/posts/${id}`}>
              <h2>{title}</h2>
            </Link>
            <p>{body}</p>
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
      posts: data.slice(0, 10)
    }
  };
};
