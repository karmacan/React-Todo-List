import React, { Component } from 'react'; 
import './TodoAdd.css'

export class TodoAdd extends Component {
  // PROPS
  // this.props.handTodoAdd (from App)

  state = {
    todoBuff: ''
  };

  render() {
    const jsx = (
      <div>
        <form 
          onSubmit={
            (ev) => this.handOnSubmit(ev, )
          } 
          className="flex-form"
          >
          <input 
            type="text" 
            name="title" 
            placeholder="New Todo..." 
            className="input-text"
            // BIND VALUE WITH STATE VAR
            value={this.state.todoBuff}
            onChange={
              (ev) => this.handOnChangeInput(ev)
            }
          />
          <input 
            type="submit" 
            value="Submit" 
            className="btn-sub"
          />
        </form>
      </div>
    );

    return jsx;
  }

  ////////////////////////////////////////
  // SCRIPTS

  handOnChangeInput = (ev) => {
    const todoBuff_ = ev.target.value;
    this.setState({todoBuff: todoBuff_});
  }

  handOnSubmit = (ev) => {
    ev.preventDefault();
    this.props.handTodoAdd(this.state.todoBuff);
    this.setState({ todoBuff: '' });
  }
}

export default TodoAdd;
