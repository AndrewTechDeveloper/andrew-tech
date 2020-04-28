import * as React from 'react'
import { render } from 'react-snapshot';
import { createBrowserHistory } from 'history'

import App from 'App'
import * as serviceWorker from 'serviceWorker'
import configureStore from 'configureStore'

const history = createBrowserHistory()

const initialState = window.INITIAL_REDUX_STATE
const store = configureStore(history, initialState)

render(<App store={store} history={history} />, document.getElementById('root'))

serviceWorker.unregister()
