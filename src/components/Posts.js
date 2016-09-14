import React from 'react'

export default class Posts extends React.Component {

  render() {
    const removePost = this.props.removePost
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
