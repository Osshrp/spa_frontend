export const ADD_POST = 'ADD_POST'

export function addPost(text) {
  return { 
    type: ADD_POST,
    text: text
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
}