import React from 'react'
import Post from '../components/Post'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from '../actions/postActions'

class PostContainer extends React.Component {

  render() {
    const { receivePost } = this.props.postActions
    const posts = this.props
    return (
      <
        Post
        id = {this.props.params.id}
        receivePost = {receivePost}
        news = {posts}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    post: state.news.post
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
