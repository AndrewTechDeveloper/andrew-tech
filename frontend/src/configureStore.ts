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
  if(process.env.NODE_ENV === 'development'){
    const store = createStore(
      createRootReducer(history),
      initialState,
      composeEnhancers(applyMiddleware(routerMiddleware(history), logger, sagaMiddleware))
    )
    sagaMiddleware.run(rootSaga)
    return store
  } else {
    const store = createStore(
      createRootReducer(history),
      initialState,
      composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    )
    sagaMiddleware.run(rootSaga)
    return store
  }
}
