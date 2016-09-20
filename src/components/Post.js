import React from 'react'

export default class Post extends React.Component {

  componentDidMount() {
    this.props.receivePost(this.props.id)
  }

  render() {
    const post = this.props.news.post
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          {post.title}
        </div>
        <div className='panel-body'>
          {post.body}
        </div>
        <div>
          <p>{post.username}</p>
          <button 
            className='btn btn-link'
            onClick={() => (post)}>
            Delete post
          </button>
        </div>
      </div>
    )
  }
}
