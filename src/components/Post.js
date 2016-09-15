import React from 'react'

export default class Post extends React.Component {

  componentDidMount() {
    this.props.receivePost(this.props.id)
  }

  render() {
    // const post = this.props.post
    const post = 'AAAAAAAAAAA'
    console.info('PROPPPPs',this.props.post)
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          {post.tilte}
        </div>
        <div className='panel-body'>
          {post.body}
        </div>
        <div>
          <p>{post.author}</p>
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