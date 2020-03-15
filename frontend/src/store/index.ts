import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

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
