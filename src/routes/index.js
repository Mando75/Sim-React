import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import './routes.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Routes(props) {
  return (
    <Router history={createHistory()}>
      <div className="site-container">
        <Route path="/:site?" component={Header} />
        <div className="routes-container">
          <Switch>
            <Route path="/" exact render={() => (<div>ROOT ROUTE CONTENT YOOO</div>)} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Route path='/:site?' component={Footer} />
      </div>
    </Router>
  )
}