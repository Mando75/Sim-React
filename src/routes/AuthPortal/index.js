import React, { Component } from 'react'
import { connect } from 'redux-zero/react'
import Icon from 'react-fontawesome'
import './auth-portal.css'

// import { auth } from '../../redux-zero/actions/auth'
import BaseService from '../../services/BaseService'
// import AuthService from '../../services/AuthService'
import Input from '../../components/Input'
// import Loading from '../Loading'

const MTP = ({authed}) => ({authed});
class AuthPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      type: 'student',
      loading: false,
      authed: false
    }
  }

  _handleInput = (e) => { this.setState({ [e.target.name]: e.target.value }); }

  _handleType = (val) => { this.setState({ type: val }); }

  _login = (e) => {
    e.preventDefault() 
    e.stopPropagation();
    console.log(this.state.authed);
    this.setState({ loading: true }, async () => {
      // let success = await AuthService.log_in(this.state.username, this.state.password);
      // await auth();
      // console.log(`auth state: ${this.props.authed}`);
      // console.log(success);
    })
  }

  componentWillMount() {
    // set loading and stuff in here?
    console.log(BaseService.auth);
  }
  
  render() {
    const { type } = this.state; 
    return (
      <div className='auth-portal-component'>
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

// 4E6A6
// 388019411