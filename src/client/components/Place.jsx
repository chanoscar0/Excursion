import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Place extends Component {
  constructor(){
    super();
    this.state = {description: '', sourceImage: '', trip: {}}
    this.onClickHandler = this.onClickHandler.bind(this);
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
      this.setState({description: data.data.place.description.text, sourceImage: data.data.place.main_media.media[0].url, trip: {}});
    })
    .catch((err) => {
      console.log(err);
    })
  }
  onClickHandler() {
    const newObj = Object.assign({}, this.state);
    const newTrip = Object.assign({}, this.state.trip);
    if(newTrip[this.props.match.params.destination]) {
      newTrip[this.props.match.params.destination].push(this.props.match.params.place);
    } else{
      newTrip[this.props.match.params.destination] = [this.props.match.params.place];
    }
    newObj.trip = newTrip;
    this.setState(newObj);
  }
  render() {
    const imgStyle = {
      width: '500px',
      height: 'auto'
    }
    const pStyle = {
      width: '500px',
    }
    const backUrl = '/' + this.props.match.params.country + '/' + this.props.match.params.destination;
    console.log(this.state.trip);
    return (
      <div>
        <h1>{this.props.match.params.place}</h1>
        <img style={imgStyle} src={this.state.sourceImage}></img>
        <p style= {pStyle}>{this.state.description}</p>
        <button onClick = {this.onClickHandler}>Add event</button><button><Link to={backUrl}>Back to choosing an Activity</Link></button>
      </div>
    )
  }
}
export default Place;