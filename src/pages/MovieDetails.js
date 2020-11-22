import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/movieDetails.css';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import Header from '../components/Header';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);
    this.HandleDelete = this.HandleDelete.bind(this);

    this.state = {
      loaded: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    // a movieAPI ja  passaa pra int o parametro id
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      loaded: true,
      movie,
    });
  }

  async HandleDelete() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (!this.state.loaded) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <Header />
        <img
          className="img-datails"
          alt="Movie Cover"
          src={imagePath.includes('https') ? `${imagePath}` : `../${imagePath}`}
        />
        <div className="info-wrapper">
          <div className="description-w">
            <h2 className="title-details">{title}</h2>
            <hr className="hr-details" />
            <p className="subtitle-details">{`${subtitle}`}</p>
            <p className="storyline-details">{`Storyline: ${storyline}`}</p>
          </div>
          <div className="extra-w">
            <p className="genre-details">{genre}</p>
            <p className="rating-details">{rating}</p>
          </div>
        </div>

        <section className="link-wrapper">
          <Link className="link det" to="/">
            VOLTAR
          </Link>
          <Link className="link det" to={`/movies/${this.props.match.params.id}/edit`}>
            EDITAR
          </Link>
          <Link className="link det" onClick={this.HandleDelete} to="/">
            DELETAR
          </Link>
        </section>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.any.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
