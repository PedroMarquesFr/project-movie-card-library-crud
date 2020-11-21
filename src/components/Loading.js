import React, { Component } from 'react';
import '../styles/loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="loading"></div>
        Carregando...
      </div>
    );
  }
}

export default Loading;
