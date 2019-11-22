import React from 'react';
import './App.css';

import Header_ from './compons/layout/Header';
import TodoList_ from './compons/TodoList';
import TodoAdd from './compons/TodoAdd';
import uuid from 'uuid';

// REACT ROUTER
import { BrowserRouter as Router } from 'react-router-dom';
import { Route as Switch } from 'react-router-dom';
import PageAbout from './compons/PageAbout';

class App extends React.Component {
  state = {
    todos: []
  };

  ////////////////////////////////////////
  // LOCAL STORE

  componentWillMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (!todos) return;
    this.setState({todos});
  }

  componentDidUpdate() {
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  ////////////////////////////////////////
  // MARKUP

  render() {
    const jsxHome = (
      <React.Fragment>
        <TodoAdd handTodoAdd={this.handTodoAdd_} />
        {/* THROW VALUE TO CHILD COMPONENT (add it to childs props) */}
        <TodoList_ 
          todoList={this.state.todos} 
          handChangeCheckbox_={this.handChangeCheckbox__}
          handClickBtnDel_={this.handClickBtnDel__}
        />
      </React.Fragment>
    );

    // ROUTING
    const jsxRouted = (
      <div className="contain">
        {/* ROUTED */}
        <Router>
          <Header_ title={'Todo List'} />

          {/* HOME (self) */}
          <Switch exact path="/" render={props => jsxHome} />
          {/* ABOUT (component) */}
          <Switch path="/about" component={PageAbout} />
        </Router>

      </div>
    );
    
    return jsxRouted;
  }

  ////////////////////////////////////////
  // SCRIPTS

  handChangeCheckbox__ = (id) => {
    //console.log(id);

    let todos_ = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos: todos_});
  }

  handClickBtnDel__ = (ev, id) => {
    ev.preventDefault();
    let todos_ = this.state.todos.filter(todo => 
      /* return */ todo.id !== id
    );
    this.setState({todos: todos_});
  }

  handTodoAdd_ = (todoTitle) => {
    //console.log(todoTitle);
    const newTodo = {
      id: uuid.v4(),
      title: todoTitle,
      completed: false
    };

    let todos_ = [
      ...this.state.todos,
      newTodo
    ];
    this.setState({todos: todos_});
  }

}

export default App;
