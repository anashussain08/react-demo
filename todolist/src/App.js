import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputComponent from './components/input/input'
import ViewComponent from './components/view/view'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo List</h2>
        </div>
        
        <InputComponent />
        <hr />
        <ViewComponent />
      </div>
    );
  }
}

export default App;
