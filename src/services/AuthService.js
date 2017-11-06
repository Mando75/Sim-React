import BaseService from './BaseService'
import axios from 'axios'
import qs from 'querystring'
import { setUser } from '../redux-zero/actions/user'

export default class AuthService extends BaseService {

  static log_in(username, password, type) {
    return axios({
      method: 'post',
      url: `${process.env.REACT_APP_SERVER}/auth`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({
        unit_id: username,
        password: password,
        type: type
      })
    }).then(({data}) => {
      setUser(data.user);
      this.auth = data.token;
      return true;
    }).catch(() => false);
  }

  static check_auth() {
    return axios({
      method: 'post',
      url: `${process.env.REACT_APP_SERVER}/checkauth`,
      headers: { ...this.auth }
    }).then(({data}) => data.user)
      .catch(() => false);
  }

}