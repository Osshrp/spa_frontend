import {server} from '../app'

export const ADD_POST = 'ADD_POST'

export function addPost(post) {
  return { 
    type: ADD_POST,
    post: { id: post.id, title: post.title, body: post.body }
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

// export function postsReceived(posts) {
//   return {
//     type: 'GET_POSTS',
//     posts: posts
//   }
// }

// export function getPosts() {
//   return(dispatch) => {
//     dispatch({
//       type: 'GET_POSTS_REQUEST'
//     })

//     fetch(server, {
//       method: 'GET'
//     })
//       // .then((response) => _handleErrors(response, dispatch))
//       .then((response) => response.json() )
//       .then((json) => {
//         dispatch({
//           type: 'GET_POSTS_SUCCESS',
//           posts: postsReceived(json)
//         })
//       })

//     // dispatch({
//     //   type: 'GET_POSTS_SUCCESS'

//     // })
//   }
// }
