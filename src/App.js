import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Containers/Layout/Layout.js';
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
