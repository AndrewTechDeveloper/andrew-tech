import { Store, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';
import { AppState, createRootReducer } from 'store';

export default function configureStore(history: History, initialState: AppState): Store<AppState> {
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
  return store;
}
