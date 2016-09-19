import React from 'react'

class App extends React.Component {
  render() {

    return (
      <div className='row'>
        <div className='col-xs-12'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
