import React, { Component } from 'react'
import { connect } from 'redux-zero/react'
import './auth-portal.css'

import { auth } from '../../redux-zero/actions/auth'
import AuthService from '../../services/AuthService'
import Input from '../../components/Input'
import Loading from '../../components/Loading'

const MTP = ({_loading, _id}) => ({_loading, _id});
class AuthPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      type: 'student',
      loginFailed: false,
      loginLoading: false,
      doneLoading: false
    }
  }

  _handleInput = (e) => { this.setState({ [e.target.name]: e.target.value }); }

  _handleType = (val) => { this.setState({ type: val }); }

  _login = (e) => {
    e.preventDefault() 
    e.stopPropagation();
    this.setState({ loginLoading: true }, async () => {
      let success = await AuthService.log_in(this.state.username, this.state.password, this.state.type);
      if (!success) {
        setTimeout(() => {this.setState({
          loginFailed: true,
          loginLoading: false
        })}, 3000);
      } else {
        setTimeout(() => {auth()}, 2500);
      }
    })
  }

  render() {
    const { type, loginFailed, loginLoading, doneLoading } = this.state;
    const { _loading, _id } = this.props;
    if (!!_id && !doneLoading) setTimeout(() => {this.setState({doneLoading: true})}, 1000);
    return (
      <div className={`auth-portal-component${!!doneLoading ? ' fade-out' : ''}`}>
        <div className="login-box">
          <form onSubmit={this._login}>
            <div className="title">BYU-I ECON SIM</div>
            <Input name="username" placeholder="username" type="text" onChange={this._handleInput} className="input"/>
            <Input name="password" placeholder="password" type="password" onChange={this._handleInput} className="input password"/>
            <div className="button-wrapper">
              <div className="type-toggle-wrapper">
                  <div 
                    className={`toggle-item${type === 'student' ? ' active' : ' inactive'}`} 
                    onClick={this._handleType.bind(null, "student")}>
                    student
                  </div>
                  <div
                    className={`toggle-item${type === 'teacher' ? ' active' : ' inactive'}`}
                    onClick={this._handleType.bind(null, "teacher")}>
                    teacher
                  </div>
                <div className={`highlight${type === 'teacher' ? ' left-50' : ''}`}></div>
              </div>
              <button className="submit" type="submit">login</button>
            </div>
          </form>
          {(_loading || loginLoading) && <div className="loading-wrapper">
            <Loading width={180}/>
          </div>}
          {loginFailed && <div className="login-failed-wrapper">
            Login failed. Please check your credentials.
          </div>}
        </div>
      </div>
    );
  }
}

export default connect(MTP)(AuthPortal)