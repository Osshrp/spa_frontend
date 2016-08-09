import React from 'react';
// import ReactDOM from 'react-dom'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { author: '',
                   title: '',
                   body: ''
                 }
  }

  // onChangeHandler(e) {
  //   this.setState({myValue: e.target.value})
  // }

  onClickHandler() {
      alert(this.refs.author.value)
      alert(this.refs.title.value)
      alert(this.refs.body.value)
      // e.priventDefault()
      console.log(this.refs.author.value)
      // alert(ReactDOM.findDOMNode(this.refs.author).value)
    // alert(ReactDOM.findDOMNode(this.refs.author).value)
    
  }

  render() {
    return (
      <form>
        <input
          type='text'
          defaultValue=''
          placeholder='Ваше имя'
          ref='author'
        />
        <input
          type='text'
          defaultValue=''
          placeholder='Заголовок'
          ref='title'
        />
        <textarea
          defaultValue=''
          placeholder='Текст новости'
          ref='body'
        ></textarea>
        <button
          className='add__btn'
          onClick={(event) => this.onClickHandler(event)}>
          Отправить
        </button>
      </form>
    )
  }
}

export default PostForm;
