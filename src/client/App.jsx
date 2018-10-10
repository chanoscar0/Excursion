import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Wrapper from './containers/MainContainer.jsx';
import Country from './components/Country.jsx';
import Destination from './components/Destination.jsx';
import Option from './components/Option.jsx';
import Place from './components/Place.jsx';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path = "/:country/:destination/:option/:place" component = {Place}/>
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