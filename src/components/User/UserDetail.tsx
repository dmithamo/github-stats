/* eslint-disable camelcase */
import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Repos from './Repos';
import User from './User';
import Spinner from '../Spinner';
import Error from '../Error';

const { REACT_APP_GH_CLIENT_ID, REACT_APP_GH_CLIENT_SECRET } = process.env;

interface Props {
  match: any;
}
interface State {
  loadingRepos: Boolean;
  loadingUser: Boolean;
  repos: any;
  user: any;
  error: any;
}

class UserDetail extends Component<Props> {
  state: State = {
    loadingRepos: true,
    loadingUser: true,
    repos: null,
    user: null,
    error: null,
  };

  componentDidMount() {
    const {
      match: {
        params: { username },
      },
    } = this.props;

    this.getUser(username);
    this.getRepos(username);
  }

  /**
   * @description GET all of a user's repos from the github api
   * given username
   * @param {string} username - gh handle of user
   * @returns void;
   */
  getRepos = async (username: string) => {
    this.setState({ loadingRepos: true });

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=100&client_id=${REACT_APP_GH_CLIENT_ID}&client_secret=${REACT_APP_GH_CLIENT_SECRET}`,
      );
      this.setState({ repos, loadingUser: false });
    } catch (err) {
      this.showError('network-err');
    }
  };

  /**
   * @description GET  user from the github api
   * given username
   * @param {string} username - gh handle of user
   * @returns void;
   */
  getUser = async (username: string) => {
    this.setState({ loadingUser: true });

    try {
      const { data: user } = await axios.get(
        `https:api.github.com/users/${username}?&client_id=${REACT_APP_GH_CLIENT_ID}&client_secret=${REACT_APP_GH_CLIENT_SECRET}`,
      );
      this.setState({ loadingRepos: false, user });
    } catch (err) {
      this.showError('network-err');
    }
  };

  showError = (type: string) => {
    type === 'network-err' &&
      this.setState({
        error: {
          status: 500,
          statusText: 'Network or server error',
        },
      });
  };

  render() {
    const { error, loadingUser, loadingRepos, user, repos } = this.state;
    return error ? (
      <Error error={{ status: 400, statusText: 'Network or server error' }} />
    ) : (
      <Fragment>
        {loadingUser ? <Spinner content='user' /> : <User user={user} />}
        {loadingRepos ? (
          <Spinner content='repos' />
        ) : (
          repos && <Repos repos={repos} />
        )}
      </Fragment>
    );
  }
}

export default UserDetail;
