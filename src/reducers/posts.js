import {ADD_POST} from '../actions/postActions.js'

const preloadedState = {
  greeting: 'Hello world',
  posts: []
}

export default function post(state = preloadedState, action) {
  switch (action.type) {
    case ADD_POST: {
      const newPosts = state.posts.concat(action.post.id)
      return Object.assign({}, state, {posts: newPosts})
    }
    default:
      return state
  }
}