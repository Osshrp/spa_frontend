import React from 'react'
import Post from '../components/Post'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from '../actions/postActions'

class PostContainer extends React.Component {

  render() {
    const { receivePost } = this.props.postActions
    const posts = this.props
    console.info('PostContainer this.props.posts', this.props.posts)
    // const post = 'AAAAAAAAAAA'
    console.info('AAAAAAAAAs',this.props.params.id)
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
  console.info('ssssssss', state)
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
