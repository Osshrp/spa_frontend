import {ADD_POST, GET_POSTS, GET_POST, DELETE_POST} from '../actions/postActions.js'

const preloadedState = {
  posts: [],
  post: {}
}

const removePost = (posts, index) => {
  return [
    ...posts.slice(0, index),
    ...posts.slice(index + 1)
  ]
}

export default function news(state = preloadedState, action) {
  switch (action.type) {
    case ADD_POST: {
      const newPosts = state.posts.concat(action.post)
      return Object.assign({}, state, {posts: newPosts})
    }

    case GET_POSTS:
      return Object.assign({}, state, {posts: action.posts})

    case DELETE_POST: {
      const modifiedPosts = removePost(state.posts, action.key)
      return Object.assign({}, state, {posts: modifiedPosts})
    }

    case GET_POST: {
      return Object.assign({}, state, {post: action.post})
    }

    default:
      return state
  }
}
