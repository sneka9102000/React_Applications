import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import FunctionClick  from './components/FunctionClick'

class App extends Component {
  render() {
    return(
      <div className="App">
        <FunctionClick />
      </div>
    );
  }
}

export default App;
