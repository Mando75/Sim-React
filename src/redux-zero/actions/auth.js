import store from '../store'

export const auth = () => {
  store.setState({ authed: true });
}

export const deauth = () => {
  store.setState({ authed: false });
}
