import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Wrapper from './containers/MainContainer.jsx';
import Country from './components/Country.jsx';
import Destination from './components/Destination.jsx';
import Option from './components/Option.jsx';
import Place from './components/Place.jsx';
import Trips from './components/Trips.jsx';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {},
      destination: '',
    }
    this.addEventHandler = this.addEventHandler.bind(this);
    this.saveEventHandler = this.saveEventHandler.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  addEventHandler(destination, place) {
    const newObj = Object.assign({}, this.state.trip);
    if(newObj[destination]){
      newObj[destination].push(place);
    } else{
      newObj[destination] = [place];
    }
    this.setState({trip: newObj, destination: destination});
  }
  saveEventHandler(){
    this.setState({redirect: true});
    fetch('http://localhost:3000/trips', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        id: 0,
        trip: this.state.trip,
        destination: this.state.destination
      })
    })
    .then(data => data.json())
    .then((newTrip) => {
      console.log(newTrip);
      alert('Trip saved!');
      const newState = {
        trip: {},
        destination: '',
      }
      this.setState(newState);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    })
  }
  renderRedirect() {
      return <Redirect to='/'/>
  }
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path = '/myTrips' component = {Trips}/>
          <Route exact path = "/:country/:destination/:option/:place" render ={(props) => <Place {...props} trip = {this.state.trip} onClick = {this.addEventHandler} saveEventHandler = {this.saveEventHandler} redirectHandler = {this.renderRedirect}></Place>}/>
          <Route exact path = "/:country/:destination/:option" component = {Option}/>
          <Route exact path = "/:country/:destination" component={Destination}/>
          <Route path="/:country" component={Country} />
          <Route exact={true} path="/" component={Wrapper} />
      </Switch>
    </BrowserRouter>
    )
  }
}
export default App;