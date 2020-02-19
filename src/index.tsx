import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import App from './App';

library.add(fab, faCopyright, faEnvelope);

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

// (module as any) because: TS says 'module does not have property `hot`'
if ((module as any).hot) {
  (module as any).hot.accept('./App', () => {
    ReactDOM.render(<App />, root);
  });
}
