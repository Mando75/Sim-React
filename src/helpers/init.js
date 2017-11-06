import AuthService from '../services/AuthService'
import { auth } from '../redux-zero/actions/auth'
import { setUser } from '../redux-zero/actions/user'
import { startLoading } from '../redux-zero/actions/loading'
import { checkToken } from './token'

export const initAuth = async () => {
  if (checkToken()) {
    startLoading();
    
    let user = await AuthService.check_auth();
    if (!user) return;
    setUser(user);

    setTimeout(() => {auth()}, 2500);
  }
}