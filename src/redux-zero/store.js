import createStore from 'redux-zero'

const initialState = { 
  _loading: false,
  _authed: false,
  _id: '',
  first_name: '',
  last_name: '',
  type: '',
  section: '' // Only as student
};
const store = createStore(initialState);

export default store;
