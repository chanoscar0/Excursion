import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Option extends Component {
  constructor(){
    super();
    this.state = {
      activities: [],
      trip: {}
    };
  }
  componentDidMount(){
    const { cityCode } = this.props.location.state;
    let currOption = this.props.match.params.option;
    const url = 'https://api.sygictravelapi.com/1.1/en/places/list?parent='+ cityCode + '&categories=' + currOption + '&limit=20&level=poi';
    console.log(url);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        'x-api-key': 'dPGMz9OTla8MRsLiiEPL55j4vTwz9tXc8vW0M2oE'
      }})
      .then((res => res.json()))
      .then(data => {
        let newState = Object.assign({}, this.state);
        newState.activities = data.data.places;
        this.setState({activities: newState.activities});
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const buttonStyles = {
      padding: '0 15 0 15',
      marginLeft: '15px',
      marginBottom: '10px'
    }
    const activityMap = this.state.activities.map((activity) => {
      let url = '/' + this.props.match.params.country + '/' + this.props.match.params.destination + '/' + this.props.match.params.option + '/' + activity.name;
     return (<div>
      <button style = {buttonStyles}><Link to = {{pathname: url, state: {activityID: activity.id}}}>{activity.name}</Link></button>
      <br></br>
     </div>)
    })
    return (
      <div>
        <h2>Pick a place to experience {this.props.match.params.option}:</h2>
        {activityMap}
      </div>
    )
  }
}
export default Option;