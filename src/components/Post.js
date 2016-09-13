import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from '../actions/postActions'

export default class Post extends React.Component {

  componentDidMount() {
    this.props.receivePosts()
  }

  render() {
    const { removePost } = this.props.postActions

    var newsNodes = this.props.news.posts.map(function(item, key) {
      return (
        <div className='panel panel-default' key = {key}>
          <div className='panel-heading'>
            {item.title}
          </div>
          <div className='panel-body'>
            {item.body}
          </div>
          <div>
            <p>{item.username}</p>
            <button 
              className='btn btn-link'
              onClick={() => removePost(item.id, key)}>
              Delete post
            </button>
          </div>
        </div>
      )
    })
    return (
      <div>
        {newsNodes}
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

export default connect(mapStateToProps, mapDispatchToProps)(Post)
