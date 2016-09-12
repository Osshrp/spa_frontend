import React from 'react'
import { connect } from 'react-redux'
import {receivePosts, getPosts, removePost, deletePost} from '../actions/postActions'
import Post from '../components/Post'

class PostContainer extends React.Component {
  // componentDidMount() {
  //   this.props.receivePosts()
  // }

}

function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    bindActionCreators({receivePosts, getPosts, removePost, deletePost}, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchProps)(PostContainer)
