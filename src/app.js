import React from 'react'
import Post from './post'
import PostForm from './post_form'
import 'whatwg-fetch'

// var posts = [
//       { id: 1, name: 'Мороз и война', description: 'Дед Мороз вышел на тропу войны' },
//       { id: 2, name: 'Мороз и Л.Н. Толстой', description: 'Замечен Мороз, читающий "Войну и Мир"' },
//       { id: 3, name: 'Мороз и топор', description: 'Мороз закопал топор войны' }
//     ]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: []}
  }

  // loadPosts() {
    fetch('http://localhost:3000/api/posts', {mode: 'cors'})
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      this.setState({data: json})

      console.log('parsed json', json)
      // alert(json[0].title)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  // }

  // componentDidMount() {
  //   this.loadPosts()
  // }
  render() {
    return (
      <div>
        <Post news = {this.state.data} />
        <PostForm />
      </div>
    )
  }
}

export default App
