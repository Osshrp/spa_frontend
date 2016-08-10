import React from 'react'
import Post from './post'
import PostForm from './post_form'
import 'whatwg-fetch'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts: []}
    this.server = 'http://localhost:3000/api/posts'
  }

  loadPosts() {
    // fetch('http://localhost:3000/api/posts', {mode: 'cors'})
    fetch(this.server, {mode: 'cors'})
    .then(response => {
      return response.json()
    }).then(posts => {
      this.setState({posts: posts})
    }).catch(err => {
      console.log('parsing failed:', err)
    })
  }

  handlePostSubmit(post) {
    fetch(this.server, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(response => {
      return response.json()
    }).then(posts => {
      this.setState({posts: this.state.posts.concat(posts)})
    }).catch(err => {
      console.log('parsing failed:', err)
    })
  }

  componentDidMount() {
    this.loadPosts()
  }
  render() {
    return (
      <div>
        <Post news = {this.state.posts} />
        <PostForm onPostSubmit = {(post) => this.handlePostSubmit(post)}/>
      </div>
    )
  }
}

export default App
