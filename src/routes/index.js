import React from 'react'
import { connect } from 'redux-zero/react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './routes.css'

import { initAuth } from '../helpers/init'
import AuthPortal from '../components/AuthPortal'

const MTP = ({authed}) => ({authed});
function Routes(props) {
  initAuth();
  return (
    <BrowserRouter>
      <div className="site-container">
        {props.authed ? (
          <Switch>
            <Route path="/" exact render={() => (<div className="">ROOT ROUTE CONTENT YOOO I AM HERE AND HERE TO STAY. I CAME TO YOUR HOMETOWN BUT ONLY TO SLAY.</div>)} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" component={AuthPortal} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  )
}

export default connect(MTP)(Routes)