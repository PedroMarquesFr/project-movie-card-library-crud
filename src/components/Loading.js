import React, { Component } from 'react';
import '../styles/loading.css';

import Header from '../components/Header';

class Loading extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="loading-wrapper">
          <div className="loading"></div>
          Carregando...
        </div>
      </div>
    );
  }
}

export default Loading;
