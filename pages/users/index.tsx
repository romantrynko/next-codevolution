import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import User from '../../components/user/User';
import styles from './styles.module.css';

interface IUser {
  id: string
  name: string
  email: string
}

const UserList = ({ users }: { users: IUser[] }) => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      {users.map(({ id, name, email }) => (
        <div className={styles.userCard} key={id}>
          <User user={{ name, email }} />
        </div>
      ))}
    </>
  );
};

export default UserList;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      users: data
    }
  };
};
