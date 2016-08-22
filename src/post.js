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
