import React, { Component } from 'react';
import Layout from './containers/Layout/Layout.js';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={"Backgrounds"}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
