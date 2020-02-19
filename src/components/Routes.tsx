import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './About';
import FourOhFourPage from './NotFound';
import { FrontLayout } from './Layout';
import UserDetail from './User/UserDetail';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteItem
          exact
          path="/"
          component={LandingPage}
          layout={FrontLayout}
        />
        <RouteItem
          exact
          path="/user-detail/:username"
          component={UserDetail}
          layout={FrontLayout}
        />
        <RouteItem
          exact
          path="/about"
          component={AboutPage}
          layout={FrontLayout}
        />
        <RouteItem
          exact={false}
          path="*"
          component={FourOhFourPage}
          layout={FrontLayout}
        />
      </Switch>
    </BrowserRouter>
  );
};

interface RouteItemProps {
  path: string;
  exact: boolean;
  component: any;
  layout: any;
}

const RouteItem: React.FC<RouteItemProps> = ({
  path,
  exact,
  component: Component,
  layout: Layout,
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default Routes;
