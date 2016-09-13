import React from 'react'

export default class Post extends React.Component {

  render() {
    const post = this.props.post
    console.info('PROPPPPs',this.props.params.id)
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
            onClick={() => (post.id)}>
            Delete post
          </button>
        </div>
      </div>
    )
  }
}