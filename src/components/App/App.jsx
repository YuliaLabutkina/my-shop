import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Header';
import PreLoader from '../PreLoader';
import routes from '../../routes';
import { lazyRoutes } from '../../routes';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<PreLoader sizePreloader="200px" />}>
          <Switch>
            {lazyRoutes.map(route => (
              <Route key={route.label} {...route} />
            ))}
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </main>
    </>
  );
};

export default App;
