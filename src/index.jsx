import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Layout from './components/Layout'
import Home from './components/Home'
import Details from './components/Details'
import RSVP from './components/RSVP'

import 'styles/main'

const app = document.getElementById('app');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="/details" component={Details}/>
      <Route path="/rsvp" component={RSVP}/>      
    </Route>
  </Router>
), app)
