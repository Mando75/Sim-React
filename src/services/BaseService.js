export default class BaseService {

  static get auth() {
    return !!localStorage.getItem('jwt') ? { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } : false;
  }

  static set auth(jwt) {
    localStorage.setItem('jwt', jwt);
    // Should I call auth() here action?
  }
  
  // Should I add a action call to deauth?
}