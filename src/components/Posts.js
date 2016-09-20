import React from 'react'
import { Link } from 'react-router'

export default class Posts extends React.Component {

  componentDidMount() {
    this.props.receivePosts()
  }

  render() {
    const removePost = this.props.removePost
    var newsNodes = this.props.posts.map(function(item, key) {
      // key = item.id
      return (
        <div className='panel panel-default' key = {key}>
          <div className='panel-heading'>
            <Link to={`/post/${item.id}`}>{item.title}</Link>
          </div>
          <div className='panel-body'>
            {item.body}
          </div>
          <div>
            <p>{item.username}</p>
            <button 
              className='btn btn-link'
              onClick={() => removePost(key, item.id)}>
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
