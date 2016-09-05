import React from 'react'
import Post from './post'
import PostForm from './post_form'
import 'whatwg-fetch'
import {addPost} from './actions/postActions.js'
import {store} from './index.js'
import { connect } from 'react-redux'

const server = 'http://ec2-52-34-152-41.us-west-2.compute.amazonaws.com/api/posts'
// const server = process.env.BACKEND_IP
// const server = 'http://localhost:3000/api/posts'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts: []}
  }

  loadPosts() {
    fetch(server)
    .then(response => {
      return response.json()
    }).then(posts => {
      this.setState({posts: posts})
    }).catch(err => {
      console.log('parsing failed:', err)
    })
  }

  handlePostSubmit(post) {
    fetch(server, {
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

  handleTest() {
    // event.preventDefault()
    store.dispatch(addPost('Привет Redux!'))

    // store.subscribe(() =>
    //   console.log(store.getState())
    // )
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <Post news = {this.state.posts} />
          <PostForm onPostSubmit = {(post) => this.handlePostSubmit(post)}/>
          <input
            onClick={() => this.handleTest()}
            className='btn btn-danger'
            type='button' value='test'
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    news: state
  }
}

export default connect(mapStateToProps)(App)
