import React, { Component } from 'react';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this)
    this.subClickHandler = this.subClickHandler.bind(this)
    this.delClickHandler = this.delClickHandler.bind(this)
  }

  render() {
    return (
      <div className="App">
        <input type="text" 
               value={this.state.inputValue} 
               onChange={this.inputChangeHandler} />
        <button onClick={this.subClickHandler}>提交</button>
        <ul>
          {
            this.state.list.map((value, index) => {
              return (
                <li key={index}>
                  {value}
                  <span data-index={index}
                        onClick={this.delClickHandler}
                  >delete</span>
                </li>
              )
            })
          }  
        </ul>
      </div>
    );
  }

  inputChangeHandler (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  subClickHandler () {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    })
  }

  delClickHandler (e) {
    const index = e.target.getAttribute('data-index')
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default App;
