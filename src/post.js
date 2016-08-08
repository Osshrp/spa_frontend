import React from 'react'

// class Post extends React.Component {
var Post = React.createClass({
  propTypes: {
    news: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string
    }))
  },
  render: function() {
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
})

export default Post
