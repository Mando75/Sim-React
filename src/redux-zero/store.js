import createStore from 'redux-zero'

const initialState = { authed: false };
const store = createStore(initialState);

export default store;
