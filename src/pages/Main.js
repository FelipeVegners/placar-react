import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Pricing from './Pricing.jsx'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/price" component={Pricing} />
        </Switch>
      </div>
    )
  }
}
