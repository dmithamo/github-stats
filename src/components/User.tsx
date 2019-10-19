import React, { Fragment } from 'react';
import axios from 'axios';

const { REACT_APP_GH_CLIENT_ID, REACT_APP_GH_CLIENT_SECRET } = process.env;

interface UserProps {
  user: any;
}

const User: React.FC<UserProps> = ({ user }) => {
  const { avatar_url: avatar, login, html_url: profile, score } = user;

  const onClick = async () => {
    const { data: repos } = await axios.get(
      `https:api.github.com/users/${login}/repos?per_page=100&client_id=${REACT_APP_GH_CLIENT_ID}&client_secret=${REACT_APP_GH_CLIENT_SECRET}`,
    );
    console.log(repos);
  };
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
      <button type='button' onClick={onClick}>
        Show Repos
      </button>
    </Fragment>
  );
};

export default User;
