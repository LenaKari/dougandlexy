import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Layout from './components/Layout'
import Home from './components/Home'
import EmailForm from './components/EmailForm'
import Confirmation from './components/Confirmation'

import 'styles/main'

const app = document.getElementById('app');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="/photos" component={EmailForm}/>
      <Route path="/confirmed" component={Confirmation}/>
    </Route>
  </Router>
), app)
