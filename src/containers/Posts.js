import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Posts from '../components/Posts'
import * as postActions from '../actions/postActions'

export default class PostsContainer extends React.Component {

  componentDidMount() {
    this.props.receivePosts()
  }

  render() {
    const { posts } = this.props
    const { removePost } = this.props.postActions
    const { receivePosts } = this.props.postActions
    return (
      <
        Posts news = {posts} 
        receivePosts={receivePosts}
        removePost={removePost}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
