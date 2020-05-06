import * as React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import App from 'App'
import * as serviceWorker from 'serviceWorker'
import configureStore from 'configureStore'
import 'react-app-polyfill/ie11'

const history = createBrowserHistory()
const initialState = window.INITIAL_REDUX_STATE
const store = configureStore(history, initialState)

ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'))

serviceWorker.unregister()
