import React, { Component }from 'react';
import { Link } from 'react-router-dom';
class Destination extends Component {
  constructor(props){
    super(props);
    this.state = {cityCode :''}
  }
  componentDidMount(){
    const currCountry = this.props.match.params.country;
    const currDestination = this.props.match.params.destination;
    console.log(currDestination);
    this.setState({trip: {currDestination: []}});
    let url = 'https://api.sygictravelapi.com/1.1/en/places/list?';
    if(currCountry !== 'North America' && currCountry !== 'Australia' && currDestination !== 'Hongkong'){
      url += `levels=country&query=${currDestination}`;
    } else{
      url += `levels=city&query=${currDestination}`;
    }
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        'x-api-key': 'dPGMz9OTla8MRsLiiEPL55j4vTwz9tXc8vW0M2oE'
      }})
      .then((data) => data.json())
      .then(data => {
        const newState = Object.assign({}, this.state);
        newState.cityCode = data.data.places[0].id;
        this.setState(newState);
      })
  }
  addTrip(place, destination) {
    const copyObj = Object.assign({}, this.state);
    const copyArray = this.state.trip.destination.slice();
    copyArray.push(place);
    copyObj.trip.destination = copyArray;
    this.setState(copyObj);
  }
  render(){
    const currCountry = this.props.match.params.country;
    const currDestination = this.props.match.params.destination;
    const options = ['Sightseeing', 'Eating', 'Going_Out', 'Shopping']
    const mappedLinks = options.map((option) => {
      let url = "/"+currCountry+'/'+currDestination+'/'+option.toLowerCase();
      return <button><Link to={{pathname: url, state: {
        cityCode: this.state.cityCode}}}>{option}</Link></button>
    })
    return (
      <div>
        <h2>Choose a category of activity for {this.props.match.params.destination}:</h2>
        {mappedLinks}
      </div>
    )
  }
  
}
export default Destination;