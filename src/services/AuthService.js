import BaseService from './BaseService'
import axios from 'axios'
import qs from 'querystring'

export default class AuthService extends BaseService {

  static log_in(username, password) {
    return axios({
      method: 'post',
      url: `${process.env.REACT_APP_SERVER}/auth`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({
        unit_id: username,
        password: password,
        type: "student/teacher"
      })
    }).then(({data}) => {
      // TODO: Pull more from data when Yan-yAN gives me what I want
      this.auth = data.token;
      return true;
    }).catch(() => false);
  }

  static check_auth() {
    // TODO: Hit that check_auth endpoint 
  }

}