import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

type IDashboardData = {
  id?: SVGAnimatedNumber
  posts?: number
  likes?: number
  followers?: number
  following?: number
}

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<IDashboardData>({});

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch('http://localhost:4000/dashboard');
      const data = await response.json();

      setDashboardData(data);
      setIsLoading(false);
    };
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading . . .</h2>;
  }

  return (
    <div className={styles.navMenu}>
      <h2>Dashboard</h2>
      <h4>Posts - {dashboardData.posts}</h4>
      <h4>Likes - {dashboardData.likes}</h4>
      <h4>Followers - {dashboardData.followers}</h4>
      <h4>Following - {dashboardData.following}</h4>
    </div>
  );
};

export default Dashboard;
