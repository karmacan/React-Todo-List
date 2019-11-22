import React, { Component } from 'react';
import './TodoItem.css';

import PropTypes from 'prop-types';

class TodoItem extends Component {
  // PROPS
  // this.props.todoItem (from TodoList)
  // this.props.handChangeCheckbox() (from App through TodoList)

  static propTypes = {
    todoItem: PropTypes.object.isRequired
  };

  ////////////////////////////////////////
  // STYLE

  setCompleted = () => {
    // Add prop to style
    const background = this.props.todoItem.completed
      ? '#A5D6A7'
      : '#f4f4f4';
    return { background }; // { background } == {background: background}
  }

  handHover = (ev, isHovered) => {
    const btn = ev.target;
    //console.log(btn);
    if (isHovered) {
      setTimeout(() => {
        btn.value = 'Delete';
      }, 200);
    }
    else {
      btn.value = '';
    }
  }

  ////////////////////////////////////////
  // MARKUP

  render() {
    const jsx = (
      <div className="todo-item">
        <div className="todo-group" style={this.setCompleted()}>
          {/* CHECKBOX */}
          <input 
            type="checkbox" 
            /* DEFAULT CHECKED */
            defaultChecked={this.props.todoItem.completed}
            /* BIND ID WITH HANDLER PASSED FROM PARENT [ () => this.props ] */
            onChange={
              () => this.props.handChangeCheckbox(
                this.props.todoItem.id
              )
            }
          />
          {/* TITLE */}
          <p>{this.props.todoItem.title}</p>
        </div>
        {/* BUTTON */}
        <input 
          type="button" 
          value="" 
          className="btn-del" 
          onMouseEnter={
            (ev) => this.handHover(ev, true)
          }
          onMouseLeave={
            (ev) => this.handHover(ev, false)
          }
          onClick={
            (ev) => this.props.handClickBtnDel(
              ev, this.props.todoItem.id
            )
          }
        />
      </div>
    );

    return jsx;
  }
}

export default TodoItem;
