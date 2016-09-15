import {ADD_POST, GET_POSTS, GET_POST, DELETE_POST} from '../actions/postActions.js'

const preloadedState = {
  posts: [],
  post: {}
}

export default function post(state = preloadedState, action) {
  switch (action.type) {
    case ADD_POST: {
      const newPosts = state.posts.concat(action.post)
      return Object.assign({}, state, {posts: newPosts})
    }

    case GET_POSTS:
      return Object.assign({}, state, {posts: action.posts})

    case DELETE_POST: {
      state.posts.splice(action.key, 1)
      return Object.assign({}, state, {posts: state.posts})
    }

    case GET_POST: {
      return Object.assign({}, state, {post: action.post})
    }

    default:
      return state
  }
}