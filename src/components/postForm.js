import React from 'react'

class PostForm extends React.Component {

  handleSubmit(event) {
    event.preventDefault()
    var author = this.refs.author.value.trim()
    var title = this.refs.title.value.trim()
    var body = this.refs.body.value.trim()
    if (!title || !author) {
      return
    }
    this.props.onPostSubmit({username: author, title: title, body: body})
    this.refs.title.value = ''
    this.refs.body.value = ''
    this.refs.author.value = ''
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            defaultValue=''
            placeholder='Ваше имя'
            ref='author'
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            defaultValue=''
            placeholder='Заголовок'
            ref='title'
          />
        </div>
        <div className='form-group'>
          <textarea
            className='form-control'
            defaultValue=''
            placeholder='Текст новости'
            ref='body'>
          </textarea>
        </div>
        <div className='form-group'>
          <input 
            className='btn btn-primary'
            type='submit' value='Submit'
          />
        </div>
      </form>
    )
  }
}

export default PostForm
