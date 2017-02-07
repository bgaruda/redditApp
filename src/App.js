import React, { Component } from 'react';
import './App.css';
import {comments} from './static-data.js';
import CommentsPage from './CommentsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentsPage comments={comments}></CommentsPage>
      </div>
    );
  }
}

export default App;
