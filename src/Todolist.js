import React, { Component } from 'react';
import store from './store'
import dispatcher from './dispatcher'
import TodolistUi from './TodolistUi'
import { getInputChange, addItem, delItem } from './actionCreator'

class Todolist extends Component {

  constructor (props) {
    super(props)
    this.state = store.getState()
    store.on('change', this.storeChangeHandler.bind(this))
    this.inputChangeHandler = this.inputChangeHandler.bind(this)
    this.subClickHandler = this.subClickHandler.bind(this)
    this.delClickHandler = this.delClickHandler.bind(this)
  }

  render() {
    return (
      <TodolistUi
        inputValue={this.state.inputValue}
        list={this.state.list}
        inputChangeHandler={this.inputChangeHandler}
        subClickHandler={this.subClickHandler}
        delClickHandler={this.delClickHandler}
      ></TodolistUi>
    );
  }

  storeChangeHandler () {
    this.setState(store.getState())
  }

  inputChangeHandler (e) {
    const action = getInputChange(e.target.value)
    dispatcher.dispatch(action)
  }

  subClickHandler () {
    const action = addItem()
    dispatcher.dispatch(action)
  }

  delClickHandler (e) {
    const index = e.target.getAttribute('data-index')
    const action = delItem(index)
    dispatcher.dispatch(action)
  }
}

export default Todolist;
