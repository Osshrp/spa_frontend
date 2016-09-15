import React from 'react'
import Post from '../components/Post'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from '../actions/postActions'

class PostContainer extends React.Component {

  render() {
    const { receivePost } = this.props.postActions
    // const post = this.props.posts
    // const post = 'AAAAAAAAAAA'
    console.info('AAAAAAAAAs',this.props.params.id)
    console.info('sss', this.getState)
    return (
      <
        Post id = {this.props.params.id}
        receivePost = {receivePost}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.post
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)