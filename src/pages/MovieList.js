import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import Header from '../components/Header';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
    this.state = {
      movies: [],
      loading: false,

      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',

      filteredMovies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const moviesArr = await movieAPI.getMovies();
    this.setState(
      {
        movies: moviesArr,
        loading: true,
      },
      () => this.setState({ filteredMovies: this.state.movies }),
    );
  }

  handleChange({ target }) {
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, this.filterMovie);
  }
  filterMovie() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    this.setState({
      filteredMovies: movies.filter(({ title, subtitle, storyline, bookmarked, genre }) => {
        const containText = (title + subtitle + storyline)
          .toUpperCase()
          .includes(searchText.toUpperCase());
        const filterGenre = genre.includes(selectedGenre);
        const filterBookMark = bookmarkedOnly ? bookmarked : true;
        return containText && filterGenre && filterBookMark;
      }),
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, filteredMovies } = this.state;

    // Render Loading here if the request is still happening
    if (!this.state.loading) {
      return <Loading />;
    }

    return (
      <div>
        <Header
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          handleChange={this.handleChange}
        />
        <div data-testid="movie-list" className="wrapper">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
