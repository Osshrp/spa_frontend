import {server} from '../app'

export const ADD_POST = 'ADD_POST'

export function addPost(text) {
  return { 
    type: ADD_POST,
    text: text
  }
}

export function postsReceived(posts) {
  return {
    type: 'GET_POSTS',
    posts: posts
  }
}

export function getPosts() {
  return(dispatch) => {
    dispatch({
      type: 'GET_POSTS_REQUEST'
    })

    fetch(server, {
      method: 'GET'
    })
      // .then((response) => _handleErrors(response, dispatch))
      .then((response) => response.json() )
      .then((json) => {
        dispatch({
          type: 'GET_POSTS_SUCCESS',
          posts: postsReceived(json)
        })
      })

    // dispatch({
    //   type: 'GET_POSTS_SUCCESS'

    // })
  }
}

  // fetch(server, {
  //     mode: 'cors',
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(post)
  //   })
  //   .then(response => {
  //     return response.json()
  //   }).then(posts => {
  //     this.setState({posts: this.state.posts.concat(posts)})
  //   }).catch(err => {
  //     console.log('parsing failed:', err)
  //   })
