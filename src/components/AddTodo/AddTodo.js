import React, { Component } from "react";
import uuid from "uuid";
import { Box } from "./../../styles";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      newTask: ""
    };
  }

  onChange = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      action: this.state.newTask
    };

    this.props.addHandler(newTodo);
  };
  render() {
    return (
      <div>
        <Box>
          <input
            className="form-control"
            type="text"
            name="newTodo"
            value={this.state.newTask}
            onChange={this.onChange}
            placeholder="New Todo"
          />
          <input
            className="btn btn-success"
            type="submit"
            value="Add Todo"
            onClick={this.onSubmit}
          />
        </Box>
      </div>
    );
  }
}

export default AddTodo;
