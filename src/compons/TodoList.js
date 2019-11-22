import React from 'react';
import TodoItem_ from './TodoItem';

import PropTypes from 'prop-types'; // allows to check props on presence

class TodoList extends React.Component {
  // PROPS
  // this.props.todoList (from App)
  // this.props.handChangeCheckbox_ (from App)
  // this.props.handClickBtnDel_ (from App)

  // CHECK PROPS ON PRESENCE
  static propTypes = {
    todoList: PropTypes.array.isRequired
  }

  ////////////////////////////////////////
  // MARKUP

  render() {
    const jsx = (
      <div>
      {this.props.todoList.map(todo => (
        <TodoItem_ 
          todoItem={todo} 
          key={todo.id} 
          handChangeCheckbox={this.props.handChangeCheckbox_}
          handClickBtnDel={this.props.handClickBtnDel_}
        />
      ))}
      </div>
    );

    return jsx;
  }
}

export default TodoList;