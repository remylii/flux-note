import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GlobalHeader />

        <main>
          <h2>pages / App</h2>
        </main>
      </div>
    );
  }
}
