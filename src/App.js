import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BulkMailCenter from './containers/BulkMailCenter/BulkMailCenter';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <BulkMailCenter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
