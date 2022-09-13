import useSwr from 'swr';
import styles from './styles.module.css';


const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = await response.json();
  return data;
};
const DashboardSWR = () => {
  const { data, error } = useSwr('dashboard', fetcher);

  if (error) return 'Error';

  if (!data) return 'Loading...';

  return (
    <div className={styles.navBar}>
      <h2>Dashboard</h2>
      <h4>Posts - {data.posts}</h4>
      <h4>Likes - {data.likes}</h4>
      <h4>Followers - {data.followers}</h4>
      <h4>Following - {data.following}</h4>
    </div>
  );
};

export default DashboardSWR;
