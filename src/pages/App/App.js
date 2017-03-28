import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import NoteAction from '../../actions/NoteAction';

import noteStore from '../../stores/noteStore';

import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';

export default class App extends React.Component {

  static getStores() {
    return [noteStore];
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('App#componentDidMount');
    NoteAction.fetchNotes();
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
