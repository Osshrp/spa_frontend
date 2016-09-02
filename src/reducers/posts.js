import {ADD_POST} from '../actions/postActions.js'

const preloadedState = {
  greeting: 'Hello world'
}

export default function post(state = preloadedState, action) {
  console.log('Hello Redux!')
  switch (action.type) {
    case ADD_POST:
      return Object.assign({}, state, action.text)
    default:
      return state
  }
}