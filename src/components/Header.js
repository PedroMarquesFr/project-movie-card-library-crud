import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';

import { RiMovie2Line } from 'react-icons/ri';

import '../styles/header.css';

export default class Header extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <header>
        <section>
          <RiMovie2Line className="movie-icon" />
          <h2>PPFlix</h2>
        </section>
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
        <div className="menu">
          <button>ENTRAR</button>
          <button className="info-button">INFO</button>
        </div>
      </header>
    );
  }
}
