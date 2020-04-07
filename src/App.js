import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  static defaultProps = {
    sloths: [
      {
        name: "Kevin",
        age: 5,
        src: "kevin",
        facts: [
          "Kevin loves eating popcorn.",
          "Kevin is a terrible guard sloth.",
          "Kevin wants to cuddle with you!"
        ]
      },
      {
        name: "Baby",
        age: 3,
        src: "baby",
        facts: [
          "Baby has soooo much energy!",
          "Baby is highly intelligent.",
          "Baby loves people more than sloths."
        ]
      },
      {
        name: "Talulah",
        age: 4,
        src: "talulah",
        facts: [
          "Talulah is not the brightest sloth",
          "Talulah does not like walks or exercise.",
          "Talulah loves eating food."
        ]
      }
    ]
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Sloth-Finder</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

            <li class="nav-item active">
              <a class="nav-link" href="#">name<span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">name</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">name</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default App;

