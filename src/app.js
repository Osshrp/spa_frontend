import React from 'react'
import Post from './post'
import PostForm from './post_form'

var posts = [
      { id: 1, name: 'Мороз и война', description: 'Дед Мороз вышел на тропу войны' },
      { id: 2, name: 'Мороз и Л.Н. Толстой', description: 'Замечен Мороз, читающий "Войну и Мир"' },
      { id: 3, name: 'Мороз и топор', description: 'Мороз закопал топор войны' }
    ]

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Post news = {posts} />
        <PostForm />
      </div>
    )
  }
}

export default App
