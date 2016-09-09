import {server} from '../app'

export const ADD_POST = 'ADD_POST'
export const GET_POSTS = 'GET_POSTS'
export const DELETE_POST = 'DELETE_POST'

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts: posts
  }
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post: { id: post.id, title: post.title, body: post.body, username: post.username }
  }
}

function deletePost(id, key) {
  return {
    type: DELETE_POST,
    id: id,
    key: key
  }
}

export function receivePosts() {
  return function(dispatch) {
    fetch(server)
    .then((response) => response.json())
    .then((json) => {dispatch(getPosts(json))
    }).catch(err => {
      console.log('parsing failed:', err)
    })
  }
}

export function uploadPost(post) {
  return function(dispatch) {
    fetch(server, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then((response) => response.json())
      .then((json) => { dispatch(addPost(json))
    }).catch(err => {
      console.log('parsing failed:', err)
    })
  }
}

export function removePost(id, key) {
  return function(dispatch) {
    fetch(server + '/' + id, {
      method: 'DELETE'
    }).then(() => { dispatch(deletePost(id, key))
    }).catch(err => {
      console.log('parsing failed:', err)
    })
  }
}
