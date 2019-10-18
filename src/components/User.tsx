import React, { Fragment } from 'react';

interface UserProps {
  user: any;
}

const User: React.FC<UserProps> = ({ user }) => {
  const { avatar_url: avatar, login, html_url: profile, score } = user;
  return (
    <Fragment>
      <img
        style={{ width: '100px', height: 'auto' }}
        src={avatar}
        alt={login}
      />
      <a href={profile} target='_blank' rel='noreferrer noopener'>
        <h2>{login}</h2>
      </a>
      <p>
        GitScore:
        <span>{Math.floor(score)}</span>
        <sup>*I have no idea what this number means</sup>
      </p>
    </Fragment>
  );
};

export default User;
