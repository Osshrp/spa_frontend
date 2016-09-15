import React from 'react'

export default class Posts extends React.Component {

  componentDidMount() {
    this.props.receivePosts()
  }

  render() {
    const removePost = this.props.removePost
    var newsNodes = this.props.news.posts.map(function(item, key) {
      // key = item.id
      return (
        <div className='panel panel-default' key = {item.id}>
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
              onClick={() => removePost(key)}>
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
