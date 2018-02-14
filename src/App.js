import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar/searchBar';
import BusinessList from './components/businessList/businessList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
