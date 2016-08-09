import React from 'react';
// import ReactDOM from 'react-dom'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { author: '',
                   title: '',
                   body: ''
                 }
    // this.onClickHandler = () => this.onClickHandler()
  }

  // onChangeHandler(e) {
  //   this.setState({myValue: e.target.value})
  // }

  onClickHandler(e) {
      alert(e)
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
          onClick={this.onClickHandler.bind(this)}
          ref='alert_button'>
          Отправить
        </button>
      </form>
    )
  }
}

export default PostForm;
