import React, { Component } from 'react';
import './SlothDetails.css';


class SlothDetails  extends Component {


  render() {
    const {sloth} = this.props;

    return (
      <div className="sloth-details card">
        <div className="card-img-top"
          style={{ backgroundImage: `url(${sloth.src})`}}
          alt={sloth.name}>
        </div>
        <div className="card-body">
          <h5 className="card-title">{sloth.name}</h5>
          <p className="card-text">{sloth.age}</p>
          <ul className="sloth-details-list">
            { sloth.facts.map( f=> (
              <li>{f}</li>
            ))}
          </ul>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}

export default SlothDetails;