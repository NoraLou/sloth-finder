import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import kevin from './images/kevin.jpg';
import baby from './images/baby.jpg';
import talulah from './images/talulah.jpg';
import SlothList from './SlothList';

import './App.css';

class App extends Component {
  static defaultProps = {
    sloths: [
      {
        name: "Kevin",
        age: 5,
        src: kevin,
        facts: [
          "Kevin loves eating popcorn.",
          "Kevin is a terrible guard sloth.",
          "Kevin wants to cuddle with you!"
        ]
      },
      {
        name: "Baby",
        age: 3,
        src: baby,
        facts: [
          "Baby has soooo much energy!",
          "Baby is highly intelligent.",
          "Baby loves people more than sloths."
        ]
      },
      {
        name: "Talulah",
        age: 4,
        src: talulah,
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
      <div className="App">
        <Switch>
          <Route exact path ="/"
             render={() => <SlothList sloths={this.props.sloths}/>}/>
        </Switch>
      </div>

    );
  }
}

export default App;

