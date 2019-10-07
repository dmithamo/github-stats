import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Repos from './components/Repos';
import User from './components/User';
import SearchBar from './components/SearchBar';
import { Spinner } from './components/Spinner';

interface State {
  ghUsername: string;
  user: any;
  repos: Array<any>;
  loading: Boolean;
}

const { REACT_APP_GH_CLIENT_ID, REACT_APP_GH_CLIENT_SECRET } = process.env;

class App extends Component {
  state: State = {
    ghUsername: 'dmithamo',
    user: {},
    repos: [],
    loading: true,
  };

  async componentDidMount() {
    const { ghUsername } = this.state;

    const {
      data: { items: users },
    } = await axios.get(
      `https:api.github.com/search/users?q=${ghUsername}&client_id=${REACT_APP_GH_CLIENT_ID}&client_secret=${REACT_APP_GH_CLIENT_SECRET}`,
    );

    const { data: repos } = await axios.get(
      `https:api.github.com/users/${ghUsername}/repos?per_page=100&client_id=${REACT_APP_GH_CLIENT_ID}&client_secret=${REACT_APP_GH_CLIENT_SECRET}`,
    );

    this.setState({ user: users[0], repos, loading: false });
  }

  /**
   *@description Respond to change it search parameter
   * by updating the ghUsername in state
   *
   * @returns void
   */
  handleSearchBarChange = (e: any) => {
    const { value: query } = e.target;
    this.setState({ ghUsername: query });
  };

  /**
   * @description Search the GitHub API for user
   * currently in state and update user and repo
   * with results of search
   *
   * @returns void
   *
   */
  searchUser = async () => {
    this.setState({ loading: true });
    const { ghUsername } = this.state;

    const {
      data: { items: users },
    } = await axios.get(
      `https:api.github.com/search/users?q=${ghUsername}&client_id=${REACT_APP_GH_CLIENT_ID}&client_secret=${REACT_APP_GH_CLIENT_SECRET}`,
    );

    const { data: repos } = await axios.get(
      `https:api.github.com/users/${ghUsername}/repos?per_page=100&client_id=${REACT_APP_GH_CLIENT_ID}&client_secret=${REACT_APP_GH_CLIENT_SECRET}`,
    );

    this.setState({ user: users[0], repos, loading: false });
  };

  render() {
    const { ghUsername, user, repos, loading } = this.state;

    return (
      <Fragment>
        {loading ? (
          <Spinner content='repos' />
        ) : (
          <div>
            <SearchBar
              onChange={(e) => this.handleSearchBarChange(e)}
              onClick={this.searchUser}
              query={ghUsername}
            />
            <User user={user.login} />
            <Repos repos={repos} />
          </div>
        )}
      </Fragment>
    );
  }
}

export default App;
