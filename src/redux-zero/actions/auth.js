import store from '../store'

export const auth = () => {
  store.setState({ _authed: true });
}

export const deauth = () => {
  store.setState({ _authed: false });
}
