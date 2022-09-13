import React from 'react';

const User = ({ user }) => {
  const { name, email } = user;

  return (
    <>
      <h1>{name}</h1>
      <h4>{email}</h4>
    </>
  );
};

export default User;
