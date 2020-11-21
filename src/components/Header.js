import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';

import '../styles/header.css';

export default class Header extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <header>
        <h2>logo</h2>
        {searchText !== undefined && (
          <SearchBar
            searchText={searchText}
            onSearchTextChange={this.props.handleChange}
            bookmarkedOnly={bookmarkedOnly}
            onBookmarkedChange={this.props.handleChange}
            selectedGenre={selectedGenre}
            onSelectedGenreChange={this.props.handleChange}
          />
        )}
        <div>
          <p>Entrar</p>
          <p>Info</p>
        </div>
      </header>
    );
  }
}
