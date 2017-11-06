export default class BaseService {

  static get auth() {
    return !!localStorage.getItem('jwt') ? { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } : false;
  }

  static set auth(jwt) {
    localStorage.setItem('jwt', jwt);
  }
  
  static deauthed() {
    localStorage.removeItem("jwt");
  }
}