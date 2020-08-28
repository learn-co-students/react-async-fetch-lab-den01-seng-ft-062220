import React, { Component } from 'react';

export default class App extends Component {
  state = {

  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())

  }

  render() {
    return null;
  }
}