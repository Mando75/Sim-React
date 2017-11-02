import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'redux-zero/react'
import store from './redux-zero/store'
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker'

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
