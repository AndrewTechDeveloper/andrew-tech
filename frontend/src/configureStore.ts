import { Store, createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { History } from 'history'
import { AppState, createRootReducer, rootSaga } from 'store'

export default function configureStore(history: History, initialState: AppState): Store<AppState> {
  const composeEnhancers = composeWithDevTools({})
  const sagaMiddleware = createSagaMiddleware()
  const preloadedState = window.__PRELOADED_STATE__
  delete window.__PRELOADED_STATE__
  if (process.env.NODE_ENV === 'development') {
    const store = createStore(
      createRootReducer(history),
      preloadedState || initialState,
      composeEnhancers(applyMiddleware(routerMiddleware(history), logger, sagaMiddleware))
    )
    window.snapSaveState = () => ({
      __PRELOADED_STATE__: store.getState()
    })
    sagaMiddleware.run(rootSaga)
    return store
  } else {
    const store = createStore(
      createRootReducer(history),
      preloadedState || initialState,
      composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    )
    window.snapSaveState = () => ({
      __PRELOADED_STATE__: store.getState()
    })
    sagaMiddleware.run(rootSaga)
    return store
  }
}
