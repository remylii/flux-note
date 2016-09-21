import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import SampleApp from './containers/SampleApp';
import store from './stores/';

render(
  <Provider store={store}>
    <SampleApp />
  </Provider>,
  document.querySelector('#application')
);
