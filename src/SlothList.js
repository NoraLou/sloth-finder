import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SlothList.css';

class SlothList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div className="sloth-list">
        <h1 className="display=1 text-center">Sloth List </h1>
        <div className="container">
          <div className="row">
            {this.props.sloths.map(s=> (
              <Link exact to={`/${s.name}`} className="col-md-4" key={s.name}>
                <div className="img-wrapper"
                  style={{ backgroundImage: `url(${s.src})`}}>
                </div>
                <h2>{s.name}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SlothList;