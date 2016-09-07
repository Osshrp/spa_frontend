import React, { Component } from 'react'

export default class Post extends Component {

  // static propTypes = {
  //   news: React.PropTypes.arrayOf(React.PropTypes.shape({
  //     id: React.PropTypes.number.isRequired,
  //     username: React.PropTypes.string,
  //     title: React.PropTypes.string
  //   }))
  // }

  render() {
    console.log('props:', this.props.news)
    // const { posts } = this.props.news.posts
    var newsNodes = this.props.news.posts.map(function(item, key) {
      return (
        <div className='panel panel-default' key = {key}>
          <div className='panel-heading'>
            {item.title}
          </div>
          <div className='panel-body'>
            {item.body}
          </div>
          <p>{item.username}</p>
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

export default Post