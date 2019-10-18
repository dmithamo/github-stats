import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Intro from './components/Intro';
import Repos from './components/Repos';
import User from './components/User';
import SearchBar from './components/SearchBar';
import Spinner from './components/Spinner';
import Error from './components/Error';

interface State {
  ghUsername: string;
  user: any;
  repos: Array<any>;
  loading: Boolean;
  error: { status: string; statusText: string };
  searched: Boolean;
}

const { REACT_APP_GH_CLIENT_ID, REACT_APP_GH_CLIENT_SECRET } = process.env;

class App extends Component {
  state: State = {
    ghUsername: '',
    user: {},
    repos: [],
    loading: false,
    error: { status: '', statusText: '' },
    searched: false,
  };

  /**
   *@description Respond to change it search parameter
   * by updating the ghUsername in state
   *
   * @returns void
   */
  handleSearchBarChange = (e: any) => {
    const { value: query } = e.target;
    this.setState({ ghUsername: query, error: { status: '', statusText: '' } });
  };

  /**
   * @description React to ENter keypress
   * that is, if user presses Enter, search away
   *
   * @returns void
   *
   */
  handleEnter = (e: any) => {
    e.which === 13 && this.searchUser();
  };

  /**
   * @description Add errors to state if any happen
   *
   * @returns void
   *
   */
  handleError = (error: any) => {
    const {
      response: { status, statusText },
    } = error;
    this.setState({ error: { status, statusText }, loading: false });
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

    try {
      const {
        data: { items: users },
      } = await axios.get(
        `https:api.github.com/search/users?q=${ghUsername}&client_id=${REACT_APP_GH_CLIENT_ID}&client_secret=${REACT_APP_GH_CLIENT_SECRET}`,
      );

      const { data: repos } = await axios.get(
        `https:api.github.com/users/${ghUsername}/repos?per_page=100&client_id=${REACT_APP_GH_CLIENT_ID}&client_secret=${REACT_APP_GH_CLIENT_SECRET}`,
      );

      this.setState({ user: users[0], repos, loading: false, searched: true });
    } catch (err) {
      this.handleError(err);
    }
  };

  render() {
    const { ghUsername, user, repos, loading, error, searched } = this.state;

    return (
      <Fragment>
        {loading ? (
          <Spinner content='repos' />
        ) : (
          <Fragment>
            <div>
              <Intro />
              <SearchBar
                onKeyUp={(e) => this.handleEnter(e)}
                onChange={(e) => this.handleSearchBarChange(e)}
                onClick={this.searchUser}
                query={ghUsername}
              />

              {error.status ? (
                <Error error={error} />
              ) : (
                searched && (
                  <Fragment>
                    <User user={user} />
                    <Repos repos={repos} />
                  </Fragment>
                )
              )}
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default App;
