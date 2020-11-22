import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import '../styles/formMovie.css';

import { Loading, MovieForm } from '../components';
import Header from '../components/Header';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleFetchMovie = this.handleFetchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.handleFetchMovie();
  }

  async handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async handleFetchMovie() {
    const mv = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      movie: mv,
      status: 'loaded',
    });
  }
  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div>
        <Header />
        <div data-testid="edit-movie" className="div-movie">
          <h1 className="abs-h1">{movie.title}</h1>
          <MovieForm movie={movie} onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.any.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
