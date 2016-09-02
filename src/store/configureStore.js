import { createStore } from 'redux'
import rootReducer from '../reducers'

export function configureStore(preloadedState) {
  const store = createStore(rootReducer, preloadedState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}