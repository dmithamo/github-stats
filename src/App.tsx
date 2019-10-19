import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Intro from './components/Intro';
import User from './components/User';
import SearchBar from './components/SearchBar';
import Spinner from './components/Spinner';
import Error from './components/Error';

interface State {
  ghUsername: string;
  users: Array<any>;
  loading: Boolean;
  error: any;
}

const { REACT_APP_GH_CLIENT_ID, REACT_APP_GH_CLIENT_SECRET } = process.env;

class App extends Component {
  state: State = {
    ghUsername: '',
    users: [],
    loading: false,
    error: null,
  };

  /**
   *@description Respond to change it search parameter
   * by updating the ghUsername in state
   *
   * @returns void
   */
  handleSearchBarChange = (e: any) => {
    const { value: query } = e.target;
    this.setState({ ghUsername: query, users: [], error: null });
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

      users.length > 0
        ? this.setState({ users, loading: false })
        : this.setState({
          error: { status: '404', statusText: 'No users found' },
          loading: false,
        });
    } catch (err) {
      this.handleError(err);
    }
  };

  render() {
    const { ghUsername, users, loading, error } = this.state;

    return (
      <Fragment>
        {error && <Error error={error} />}
        <Intro />
        {loading ? (
          <Spinner content='repos' />
        ) : (
          <Fragment>
            <SearchBar
              onKeyUp={(e) => this.handleEnter(e)}
              onChange={(e) => this.handleSearchBarChange(e)}
              onClick={this.searchUser}
              query={ghUsername}
            />

            <Fragment>
              <ul>
                {users.map((user) => (
                  <li key={user.login}>
                    <User user={user} />
                  </li>
                ))}
              </ul>
            </Fragment>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default App;
