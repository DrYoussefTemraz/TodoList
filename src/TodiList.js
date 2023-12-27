import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Joe1" }, { task: "Joe2" }],
    };
  }
  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
