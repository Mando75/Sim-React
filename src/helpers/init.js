// import AuthService from '../services/AuthService'
// import UserService from '../services/UserService'
// import { auth } from '../redux-zero/actions/auth'
import { checkToken } from './token'

export const initAuth = async () => {
  if (checkToken()) {
    // await AuthService.temp_check_auth();
    // await AuthService.temp_set_headers();
    // await AuthService.temp_check_auth();
    // AuthService.check_auth();
    // setTimeout(auth, 2000);
  }
}