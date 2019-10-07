import React, { Fragment } from 'react';

interface UserProps {
  user: any;
}

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <Fragment>
      <h2>{user}</h2>
    </Fragment>
  );
};

export default User;
