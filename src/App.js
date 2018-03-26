import React, { Component } from 'react';
import './App.css';
import Home from './Views/Home';
import Basket from './Views/Basket';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route path="/Basket" component={Basket}/>
                  <Route path="/" component={Home}/>
              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
