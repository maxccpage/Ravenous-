import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar/searchBar';
import BusinessList from './components/businessList/businessList';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businessesArray = [business, business, business, business, business, business];

class App extends Component {

  searchYelp(term, location, sortBy) {
    console.log(`The ${term} restaurant I am 
    looking for is in ${location} and I would 
    like to sort them by ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businessesArray} />
      </div>
    );
  }
}

export default App;
