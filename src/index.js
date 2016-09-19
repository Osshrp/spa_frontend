import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import PostsContainer from './containers/Posts'
import PostContainer from './containers/Post'
import PostForm from './components/postForm'
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
        <IndexRoute component={PostsContainer}/>
        <Route component={PostForm}>
          <Route path='posts' component={PostsContainer}/>
        </Route>
        <Route path='/post/:id' component={PostContainer}></Route>
      </Route>
      <Route path='*' component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
