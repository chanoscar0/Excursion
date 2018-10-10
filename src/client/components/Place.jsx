import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
class Place extends Component {
  constructor(){
    super();
    this.state = {description: '', sourceImage: ''}
  }
  componentDidMount() {
    const activityID = this.props.location.state.activityID;
    const url = 'https://api.sygictravelapi.com/1.1/en/places/' + activityID;

    fetch(url,  {
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        'x-api-key': 'dPGMz9OTla8MRsLiiEPL55j4vTwz9tXc8vW0M2oE'
      }})
    .then((data) => data.json())
    .then((data) => {
      this.setState({description: data.data.place.description.text, sourceImage: data.data.place.main_media.media[0].url});
    })
    .catch((err) => {
      console.log(err);
    })
  }
  render() {
    const imgStyle = {
      width: '500px',
      height: 'auto'
    }
    const pStyle = {
      width: '500px',
    }
    
    let currTrip;
    if (Object.keys(this.props.trip).length > 0){
      currTrip = this.props.trip[this.props.match.params.destination].map((place) => {
        return <li>{place}</li>
      })
    } else{
      currTrip = [];
    }
   
    const backUrl = '/' + this.props.match.params.country + '/' + this.props.match.params.destination;
    return (
      <div>
        <NavLink to='/myTrips'>My Trips</NavLink>

        <div>
          <h1>{this.props.match.params.place}</h1>
          <img style={imgStyle} src={this.state.sourceImage}></img>
          <p style= {pStyle}>{this.state.description}</p>
          <button onClick = {() => this.props.onClick(this.props.match.params.destination, this.props.match.params.place)}>Add event</button><button><Link to={backUrl}>Back to choosing an Activity</Link></button>
        </div>
        <div>
         <h2>{this.props.match.params.destination}</h2>
         {currTrip}
         <button onClick= {this.props.saveEventHandler}>Save Trip</button>
         <button><Link to={'/'}>Create a New Trip</Link></button>
        </div>
      </div>
      
    )
  }
}
export default Place;