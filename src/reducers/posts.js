import {ADD_POST, GET_POSTS, DELETE_POST} from '../actions/postActions.js'

const preloadedState = {
  posts: []
}

export default function post(state = preloadedState, action) {
  switch (action.type) {
    case ADD_POST: {
      const newPosts = state.posts.concat(action.post.id)
      return Object.assign({}, state, {posts: newPosts})
    }

    case GET_POSTS:
      return Object.assign({}, state, {posts: action.posts})

    case DELETE_POST:
      return Object.assign({}, state)

    default:
      return state
  }
}