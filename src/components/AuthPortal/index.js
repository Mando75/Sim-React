import React, { Component } from 'react'
import { connect } from 'redux-zero/react'
import Icon from 'react-fontawesome'
import './auth-portal.css'

import { auth } from '../../redux-zero/actions/auth'
import BaseService from '../../services/BaseService'
// import AuthService from '../../services/AuthService'
import Input from '../Input'
// import Loading from '../Loading'

const MTP = ({authed}) => ({authed});
class AuthPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      loading: false,
      authed: false
    }
  }

  _changeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  _login = (e) => {
    e.preventDefault() 
    e.stopPropagation();
    console.log(this.state.authed);
    this.setState({ loading: true }, async () => {
      // let success = await AuthService.log_in(this.state.username, this.state.password);
      await auth();
      console.log(`auth state: ${this.props.authed}`);
      // console.log(success);
    })
  }

  componentWillMount() {
    // set loading and stuff in here?
    console.log(BaseService.auth);
  }
  
  render() {
    
    // const { loading } = this.state;
    return (
      <div className='auth-portal-component'>
        <div className="login-box">
          <form onSubmit={this._login}>
            <div className="title">BYU-I ECON SIM</div>
            <Input name="username" placeholder="username" type="text" onChange={this._changeText} className="input"/>
            <Input name="password" placeholder="password" type="password" onChange={this._changeText} className="input password"/>
            <div className="button-wrapper">
              <div className="type-toggle-wrapper">
                {/* <div className="type-toggle"> */}
                  <div className="toggle-item active">student</div>
                  <div className="toggle-item inactive">teacher</div>
                {/* </div> */}
                <div className="highlight"></div>
              </div>
              <button className="submit" type="submit">login</button>
            </div>
          </form>
          {/* <Loading loading={loading} width={180} className="loading-margin"/> */}
        </div>
        <div className="footer">
          <div>
            <Icon name="cog" className="button" />
            <Icon name="question-circle" className="button" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(MTP)(AuthPortal)

// 9664D
// 388019411