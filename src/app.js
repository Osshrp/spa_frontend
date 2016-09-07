import React from 'react'
import { bindActionCreators } from 'redux'
import Post from './post'
import PostForm from './post_form'
import 'whatwg-fetch'
import {uploadPost} from './actions/postActions.js'
import {store} from './index.js'
import {connect} from 'react-redux'
import * as postActions from './actions/postActions'

export const server = 'http://ec2-52-34-152-41.us-west-2.compute.amazonaws.com/api/posts'
// const server = process.env.BACKEND_IP
// const server = 'http://localhost:3000/api/posts'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts: []}
  }

  // loadPosts() {
  //   fetch(server)
  //   .then(response => {
  //     return response.json()
  //   }).then(posts => {
  //     this.setState({posts: posts})
  //   }).catch(err => {
  //     console.log('parsing failed:', err)
  //   })
  // }

  // handleTest(post) {
  //   fetch(server, {
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
  // }

  componentDidMount() {
    // this.loadPosts()
    // store.dispatch(receivePosts())
    this.props.receivePosts()
  }

  handlePostSubmit(post) {
    // event.preventDefault()
    store.dispatch(uploadPost(post))
  }

  render() {
    const { posts } = this.props
    const { receivePosts } = this.props.postActions
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <Post news = {posts} receivePosts={receivePosts} />
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
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
