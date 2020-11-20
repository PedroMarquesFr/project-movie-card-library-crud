import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id, imagePath } = this.props.movie;
    return (
      <div className="card" data-testid="movie-card">
        <div className="img-wrapper">
          <div className="text-wrapper">
            <h2 className="title">{title}</h2>
            <hr />
            <h3 className="storyline">{storyline}</h3>{' '}
            <Link className="link view-details" to={`movies/${id}`}>
              VER DETALHES
            </Link>
          </div>
          <img className="img" src={imagePath} alt="poster"></img>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
