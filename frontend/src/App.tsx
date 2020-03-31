import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Store } from 'redux'
import { History } from 'history'

import Routes from 'routes'
import { AppState } from 'store'
import 'App.scss'
import { NavBar } from 'components/layouts/NavBar'
import { Footer } from 'components/layouts/Footer'

interface AppProps {
  store: Store<AppState>
  history: History
}

const App: React.FC<AppProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <NavBar />
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
      <Footer />
    </Provider>
  )
}

export default App
