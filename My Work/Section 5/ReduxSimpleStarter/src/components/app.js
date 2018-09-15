import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/data-list';
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
