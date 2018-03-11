import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar/searchBar';
import BusinessList from './components/businessList/businessList';
import Yelp from './util/Yelp.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      testing: [],
      empty: true,
      isLoading: false
    };
    this.searchYelp = this.searchYelp.bind(this);
    this.messages = [
      'Pizza in Toronto',
      'Sushi in Markham',
      'Italian in Vaughn'
    ];
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({
        businesses: businesses,
        empty: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        {this.state.empty === false ? (
          <BusinessList businesses={this.state.businesses} />
        ) : (
          <p className="Search-Message">
            Search your favourite restaurants! Try "Sushi" in "Toronto"
          </p>
        )}
      </div>
    );
  }
}

export default App;
