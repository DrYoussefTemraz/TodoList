import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      //add a task as state that we change with edit/update
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggeleForm = this.toggeleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleUpdate(evt){
    evt.preventDefault();
    //take the new task and update the parent
    //we create update function in the parent take arg of id and new task
    this.props.updatedTodos(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  //this toggle to make the boolean state to reverse
  toggeleForm(){
    this.setState({isEditing: !this.state.isEditing})
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  render() {
    let result;
    //add editing condition
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            ></input>
            <button>Update</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggeleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>

          <li>{this.props.task}</li>
        </div>
      );
    }
    return result;
  }
}
