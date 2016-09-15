// import {server} from '../app'

export const ADD_POST = 'ADD_POST'
export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const DELETE_POST = 'DELETE_POST'

// const server = 'http://ec2-52-34-152-41.us-west-2.compute.amazonaws.com/api/posts'
const server = process.env.BACKEND_IP + '/api/posts'

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts: posts
  }
}

export function getPost(post) {
  return {
    type: GET_POST,
    post: post
  }
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post: { id: post.id, title: post.title, body: post.body, username: post.username }
  }
}

function deletePost(key) {
  return {
    type: DELETE_POST,
    // id: id,
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

export function receivePost(id) {
  return function(dispatch) {
    fetch(server + '/' + id)
    .then((response) => response.json())
    .then((json) => {dispatch(getPost(json))
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

export function removePost(key) {
  return function(dispatch) {
    fetch(server + '/' + key, {
      method: 'DELETE'
    }).then(() => { dispatch(deletePost(key))
    }).catch(err => {
      console.log('parsing failed:', err)
    })
  }
}
