import React, { Component } from "react";
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";
import Search from "../Search/Search";
import { Box, Div } from "../../styles";
class ToDoContainer extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: 1,
          action: "Call Mother"
        },
        {
          id: 2,
          action: "Learn React"
        },
        {
          id: 3,
          action: "Play Soccer"
        }
      ],
      searchString: ""
    };
  }

  deleteTodo = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  };

  addTodo = newTodo => {
    console.log(this.state.todos);
    const newTodos = [...this.state.todos, newTodo];
    this.setState({ todos: newTodos });
  };

  filterTodos = searchString => {
    this.setState({
      searchString: searchString
    });
  };

  render() {
    let list = [];
    if (this.state.searchString.length > 0) {
      const filtered = this.state.todos.filter(todo =>
        todo.action.toLowerCase().includes(this.state.searchString)
      );
      list = filtered;
    } else {
      list = this.state.todos;
    }
    return (
      <Box className="container">
        <Div>
          <h1>Current Todos</h1>
          {this.state.searchString && list.length === 0 ? (
            <div>No search results</div>
          ) : (
            <div>
              <ul className="list-group">
                {list.map(todo => (
                  <Todo
                    key={todo.id}
                    todo={todo.action}
                    deleteHandler={() => this.deleteTodo(todo.id)}
                  />
                ))}
              </ul>
            </div>
          )}
        </Div>
        <Div>
          <AddTodo addHandler={this.addTodo} />
          <Search searchHandler={this.filterTodos} />
        </Div>
      </Box>
    );
  }
}

export default ToDoContainer;
