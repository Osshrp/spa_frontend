import React from 'react'

export default class Post extends React.Component {

  render() {
    // const post = this.props.post
    const post = 'AAAAAAAAAAA'
    console.info('PROPPPPs',this.props.params.id)
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          {post}
        </div>
        <div className='panel-body'>
          {post}
        </div>
        <div>
          <p>{post}</p>
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