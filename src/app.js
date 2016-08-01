import React from 'react';
import Post from './post';
import PostForm from './post_form';

class App extends React.Component {
  render() {
    return (
      <div>
        <Post />
        <PostForm />
      </div>
    );
  }
}

export default App;
