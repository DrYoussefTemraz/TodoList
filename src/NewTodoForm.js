import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuidv4(), completed: false });
    this.setState({ task: "" });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="todo task"
          onChange={this.handleChange}
          value={this.state.task}
        ></input>
        <button>Submit</button>
      </form>
    );
  }
}
