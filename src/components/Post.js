import React from 'react'
// import * as postActions from '../actions/postActions'

export default class Post extends React.Component {

  componentDidMount() {
    this.props.receivePosts()
  }

  // static propTypes = {
  //   news: React.PropTypes.arrayOf(React.PropTypes.shape({
  //     id: React.PropTypes.number.isRequired,
  //     username: React.PropTypes.string,
  //     title: React.PropTypes.string
  //   }))
  // }

  handleDeletePost(post) {
    console.log(post.id)
  }

  render() {
    // const { posts } = this.props.news.posts
    console.log('1233333',this.props.removePost)

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
              onClick={(item) => this.handleDeletePost(item)}>
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

export default Post
