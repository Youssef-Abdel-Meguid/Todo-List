import React, { Component } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

export default class App extends Component {

  state = {
    items: [],
    id: uuid(),
    item: '',
    isEdited: false
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    if(newItem.title.trim().length === 0 || newItem.title === '')
        return;

    const updateItems = this.state.items;
    updateItems.push(newItem);

    this.setState({
      items: updateItems,
      id: uuid(),
      item: '',
      isEdited: false
    });

  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter( (item) => {
      return item.id !== id;
    });
    
    this.setState({
      items: filteredItems
    });
  };

  handleEdit = (id) => {

    if(this.state.isEdited)
      return;

    const filteredItems = this.state.items.filter( (item) => {
      return item.id !== id;
    });

    const selectedItem = this.state.items.find( (item) => {
      return item.id === id;
    });

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      isEdited: true,
      id: id
    });

  };
  
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>todo input</h3>
            <TodoInput item={this.state.item}
                       handleChange={this.handleChange}
                       handleSubmit={this.handleSubmit}
                       isEdited={this.state.isEdited}/>
            <TodoList items={this.state.items}
                      clearList={this.clearList}
                      handleDelete={this.handleDelete}
                      handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    );
  }
}