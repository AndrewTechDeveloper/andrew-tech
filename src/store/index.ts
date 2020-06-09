import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import blogsSaga from 'store/blogs/sagas'
import { blogsReducer } from 'store/blogs/reducer'
import { BlogsState } from 'store/blogs/types'

export interface AppState {
  blogs: BlogsState
  router: RouterState
}

export const createRootReducer = (history: History) =>
  combineReducers({
    blogs: blogsReducer,
    router: connectRouter(history)
  })

export function* rootSaga() {
  yield all([fork(blogsSaga)])
}
