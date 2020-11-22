import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import '../styles/formMovie.css';

import Header from '../components/Header';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Header />

        <div data-testid="new-movie" className="div-movie">
          <h1 className="abs-h1">Novo Filme</h1>
          <MovieForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
export default NewMovie;
