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

const App: React.FC<AppProps> = props => {
  const { store, history } = props
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <NavBar {...props} />
        <Routes />
      </ConnectedRouter>
      <Footer />
    </Provider>
  )
}

export default App
