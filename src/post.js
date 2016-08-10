import React from 'react'

class Post extends React.Component {

  static propTypes = {
    news: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      username: React.PropTypes.string,
      title: React.PropTypes.string
    }))
  }

  render() {
    var newsNodes = this.props.news.map(function(item, key) {
      return (
        <div key = {key}>
          <p>{item.username}:</p>
          <p>{item.title}</p>
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
