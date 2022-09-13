import { GetServerSideProps } from 'next';
import Head from 'next/head';
import router from 'next/router';
import React from 'react';
import styles from './styles.module.css';
import type { Articles } from './types';

const NewsArticlesList = ({ articles }: {articles: Articles}) => {
  return (
    <div>
      <Head>
        <title>News</title>
      </Head>
      <div className={styles.sortOptions}>
        <button
          className={styles.button}
          onClick={() => router.push('/news/sports')}
        >
          Sports
        </button>
        <button
          className={styles.button}
          onClick={() => router.push('/news/politics')}
        >
          Politics
        </button>
      </div>
      {articles.map(({ id, title, description, category }) => (
        <div className={styles.news} key={id}>
          <h2>
            {id}. {title}
          </h2>
          <h4>{category}</h4>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsArticlesList;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();

  return {
    props: {
      articles: data
    }
  };
};
