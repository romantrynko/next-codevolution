import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import router from 'next/router';
import React from 'react';
import { ISession } from 'types/global';
import styles from './styles.module.css';
import type { Articles } from './types';

const NewsArticlesList = ({ articles, data }: { articles: Articles, data: ISession }) => {

  return (
    <div>
      <Head>
        <title>News</title>
      </Head>
      {data ?
        <>
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
        </> : <h2>Please sign in to see news</h2>}
    </div>
  );
};

export default NewsArticlesList;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);


  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();

  return {
    props: {
      articles: data,
      data: session
    }
  };
};
