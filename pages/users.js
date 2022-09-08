import React from 'react';
import User from '../components/User';

const UserList = ({ users }) => {
  return (
    <>
      {users.map(({ id, name, email }) => (
        <div key={id}>
          <User user={{ name, email }} />
          <hr />
        </div>
      ))}
    </>
  );
};

export default UserList;

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      users: data
    }
  };
};

// https://jsonplaceholder.typicode.com/
