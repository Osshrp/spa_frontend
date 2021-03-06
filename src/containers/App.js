import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Post from '../components/Post'
import PostForm from '../components/postForm'
import * as postActions from '../actions/postActions'

class App extends React.Component {
  render() {
    const { posts } = this.props
    const { receivePosts, uploadPost } = this.props.postActions

    return (
      <div className='row'>
        <div className='col-xs-12'>
          <Post news = {posts} receivePosts={receivePosts} />
          <PostForm onPostSubmit = {uploadPost}/>
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
