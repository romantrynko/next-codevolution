import router from 'next/router';
import styles from './styles.module.css';

const NewsArticlesList = ({ articles }) => {
  return (
    <div>
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

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();

  return {
    props: {
      articles: data
    }
  };
};
