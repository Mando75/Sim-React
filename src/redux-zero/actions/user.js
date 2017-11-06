import store from '../store'

export const setUser = (user) => {
  store.setState({...user});
}

export const delUser = () => {
  store.setState({
    _id: '',
    first_name: '',
    last_name: '',
    unit_id: '',
    type: ''
  });
}