import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.togglCompletion = this.togglCompletion.bind(this);

  }
  create(NewTodo) {
    this.setState({ todos: [...this.state.todos, NewTodo] });
  }
  remove(id) {
    this.setState({ todos: this.state.todos.filter((t) => t.id !== id) });
  }
  update(id, updatedTask) {
    //make a new array that return the object unchanged and just update the selected id
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos,
    });
  }
  togglCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos,
    });
  }
  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={this.remove}
          completed={todo.completed}
          updatedTodos={this.update}
          toggleTodo={this.togglCompletion}
        />
      );
    });

    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
