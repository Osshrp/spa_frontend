import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import Posts from './containers/Posts'
import Post from './components/Post'
import NotFound from './components/NotFound'
import configureStore from './store/configureStore.js'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

export const store = configureStore()

store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Posts}/>
        <Route path='posts' component={Posts}></Route>
        <Route path='posts/:id' component={Post}></Route>
      </Route>
      <Route path='*' component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
