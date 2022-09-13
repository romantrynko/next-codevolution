import React from 'react';
import styles from './styles.module.css';

const ArticleListByCategory = ({ articles, category }) => {
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

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;

  console.log(query);

  res.setHeader('Set-Cookie', ['name=Roman']);

  const { category } = params;

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
