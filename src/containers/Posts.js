import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Posts from '../components/Posts'
import * as postActions from '../actions/postActions'

class PostsContainer extends React.Component {

  render() {
    const { removePost } = this.props.postActions
    const { receivePosts } = this.props.postActions
    return (
      <
        Posts posts = {this.props.posts} 
        receivePosts={receivePosts}
        removePost={removePost}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.news.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
