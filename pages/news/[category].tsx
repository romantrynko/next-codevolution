import { GetServerSideProps } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import React from 'react';
import styles from './styles.module.css';
import type { Articles } from './types';

const ArticleListByCategory = ({ articles, category }: { articles: Articles, category: string }) => {
  return (
    <div>
      <h1>News about {category}</h1>
      {articles.map((article) => (
        <div className={styles.news} key={article.id}>
          <h2>
            {article.id}. {article.title}
          </h2>
          <h4>Category: {article.category}</h4>
          <p>Description: {article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleListByCategory;

interface IParams extends NextParsedUrlQuery {
  category: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, req, res, query } = context;

  console.log(query);

  res.setHeader('Set-Cookie', ['name=Roman']);

  const { category } = params as IParams;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category
    }
  };
};
