import React from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux'

class PostContainer extends React.Component {

  render() {
    // const post = this.props.posts
    // const post = 'AAAAAAAAAAA'
    console.info('AAAAAAAAAs',this.props.params.id)
    console.info('sss', this.getState)
    return (
      <Post/>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.post
  }
}

export default connect(mapStateToProps)(PostContainer)