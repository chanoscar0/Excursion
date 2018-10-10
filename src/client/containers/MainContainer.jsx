import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'

class MainContainer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Excursion</h1>
        <NavLink to='/myTrips'>My Trips</NavLink>
        <h2>Pick a Continent</h2>
        <button><Link to='/North%20America'>North America</Link></button>
        <button><Link to='/Asia'>Asia</Link></button>
        <button><Link to='/Europe'>Europe</Link></button>
        <button><Link to='/Australia'>Australia</Link></button>
        <button><Link to='/South%20America'>South America</Link></button>
        <button><Link to='/Africa'>Africa</Link></button>
      </div>
    )
  }
}

export default MainContainer;