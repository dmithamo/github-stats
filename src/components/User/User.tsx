/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  user: any;
}

const User: React.FC<Props> = ({ user }) => {
  const { avatar_url: avatar, html_url: profile, login: username, bio } = user;

  return (
    <Fragment>
      <img
        style={{ width: '100px', height: 'auto' }}
        src={avatar}
        alt={username}
      />
      <p>{bio}</p>

      <a href={profile} target='_blank' rel='noreferrer noopener'>
        {`View ${username} on GitHub`}
      </a>
      <br />
      <br />
      <Link to='/'>Back</Link>
    </Fragment>
  );
};

export default User;
