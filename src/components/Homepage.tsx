import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Intro from './Intro';
import SearchResultsContainer from './Search/SearchResultsContainer';
import UserDetail from './User/UserDetail';
import SearchBar from './Search/SearchBar';
import Spinner from './Spinner';
import Error from './Error';

interface State {
  ghUsername: string;
  searchResults: any;
  loading: Boolean;
  error: any;
}

const { REACT_APP_GH_CLIENT_ID, REACT_APP_GH_CLIENT_SECRET } = process.env;

class Homepage extends Component {
  state: State = {
    ghUsername: '',
    searchResults: null,
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
    this.setState({ ghUsername: query, searchResults: [], error: null });
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
   * @description Add errors to state if any hHomepageen
   *
   * @returns void
   *
   */
  handleError = (error: any) => {
    if (error.response) {
      const {
        response: { status, statusText },
      } = error;
      this.setState({ error: { status, statusText }, loading: false });
    } else {
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
        loading: false,
      });
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
    this.setState({ loading: true, searchResults: null, error: null });
    const { ghUsername } = this.state;

    if (ghUsername) {
      try {
        const {
          data: { items: searchResults },
        } = await axios.get(
          `https:api.github.com/search/users?per_page=100&q=${ghUsername}&client_id=${REACT_APP_GH_CLIENT_ID}&client_secret=${REACT_APP_GH_CLIENT_SECRET}`,
        );

        searchResults.length > 0
          ? this.setState({ searchResults, loading: false })
          : this.setState({
            error: { status: 404, statusText: 'No users found' },
            loading: false,
          });
      } catch (err) {
        this.handleError(err);
      }
    } else {
      this.setState({
        error: {
          status: 400,
          statusText:
            'Enter something in the search bar before you click search',
        },
        loading: false,
      });
    }
  };

  render() {
    const { ghUsername, searchResults, loading, error } = this.state;
    return (
      <Fragment>
        {error && <Error error={error} />}

        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Fragment>
                <Intro />
                <SearchBar
                  onKeyUp={(e: any) => this.handleEnter(e)}
                  onChange={(e: any) => this.handleSearchBarChange(e)}
                  onClick={this.searchUser}
                  query={ghUsername}
                />

                {loading && <Spinner content=' search results' />}

                {searchResults && searchResults.length > 0 && (
                  <SearchResultsContainer searchResults={searchResults} />
                )}
              </Fragment>
            )}
          />

          <Route
            exact
            path='/user-detail/:username'
            render={(props) => <UserDetail {...props} />}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default Homepage;
