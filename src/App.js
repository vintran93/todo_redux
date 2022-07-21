import React, { Component } from 'react';
import './App.css';
import CompleteTodos from './CompleteTodos';
import IncompleteTodos from './IncompleteTodos'
import Navbar from './Navbar';

// const todos = [
//   {id: 1, title: 'Buy groceries'},
//   {id: 2, title: 'Clean the house'},
//   {id: 3, title: 'Walk Amy'}
// ]

class App extends Component {

  // state = {
  //   todos: todos
  // }

  render(){

    return(
        <div className='App'>
          <header className='App-header'><h3>Todo List</h3></header>
          <Navbar />
          <hr />
          <IncompleteTodos />
          <CompleteTodos />
        </div>
    );
  }

}

export default App;