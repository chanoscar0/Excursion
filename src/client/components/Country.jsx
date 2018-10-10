import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Country extends Component {
  constructor(){
    super();
    this.state = {hotspots: {
      "North America": ['New York', "Chicago", 'Seattle', 'Los Angeles', 'San Francisco', 'Orlando'],
      "Asia": ['Korea', 'Hongkong','China','Japan','Macau','Singapore','Thailand','Vietnam','Malaysia'],
      "Europe": ['Spain', 'United Kingdom', 'France', 'Italy', 'Germany', 'Portugal', 'Greece'],
      "Australia": ['New Zealand', 'Melbourne', 'Sydney'],
      "South America": ['Brazil', 'Venezuela', 'Peru', 'Colombia', 'Argentina'],
      "Africa": ['South Africa', 'Morocco', 'Tanzania']
    }}
  }

  render() {
    const currentCountry = this.props.match.params.country;
    const destinationMap = this.state.hotspots[currentCountry].map((destination,index) => {
      let url = '/' + currentCountry + '/' + destination;
      console.log(url);
      return <button className="buttonStyle"><Link key={destination + index} to={url}>{destination}</Link></button>
    })
    return (
      <div>
        <h1>Pick a hotspot!</h1>
        <h2>{this.props.match.params.country}</h2>
        {destinationMap}
        <br></br>
        <p></p>
        <button><Link to='/'>Back</Link></button>
      </div>
    )
  }
}

export default Country;