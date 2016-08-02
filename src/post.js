import React from 'react'

class Post extends React.Component {
  render() {
    var newsNodes = this.props.news.map(function(item) {
      return (
        <div>
          <p>{item.name}:</p>
          <p>{item.description}</p>
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
