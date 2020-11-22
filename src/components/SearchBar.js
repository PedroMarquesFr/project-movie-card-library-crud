import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { FiHeart } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form" className="form-filter">
        <label data-testid="text-input-label" htmlFor="f" className="search-label">
          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
            id="f"
            name="searchText"
            placeholder="Inclui o texto"
            className="input-search"
          />
          <FiSearch className="icon-search" />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="a" className="heart-label">
          Favoritos
          <input
            type="checkbox"
            className="checkmark"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
            id="a"
            name="bookmarkedOnly"
          />
          <FiHeart className="icon-heart" />
        </label>

        <label data-testid="select-input-label" htmlFor="b">
          <select
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            id="b"
            name="selectedGenre"
          >
            <option value="" data-testid="select-option">
              Todos
            </option>
            <option value="action" data-testid="select-option">
              Ação
            </option>
            <option value="comedy" data-testid="select-option">
              Comédia
            </option>
            <option value="thriller" data-testid="select-option">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

// SearchBar.propTypes = {
//   searchText: PropTypes.string.isRequired,
//   onSearchTextChange: PropTypes.func.isRequired,
//   bookmarkedOnly: PropTypes.bool.isRequired,
//   onBookmarkedChange: PropTypes.func.isRequired,
//   selectedGenre: PropTypes.string.isRequired,
//   onSelectedGenreChange: PropTypes.func.isRequired,
// };
export default SearchBar;
