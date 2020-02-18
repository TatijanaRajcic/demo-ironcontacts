import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import FullList from "./pages/FullList"

class App extends Component {
  render() {

    let shortList = [...contacts].slice(0,5)

    return (
      <div className="App">
        <FullList contacts={contacts} shortList={shortList}/>
      </div>
    );
  }
}

export default App;
