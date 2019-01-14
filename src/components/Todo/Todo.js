import React, { Component } from "react";
import { ListItem } from "./../../styles";

class Todo extends Component {
  render() {
    return (
      <React.Fragment>
        <ListItem className="list-group-item">
          {this.props.todo}
          <input
            className="btn btn-danger"
            type="submit"
            value="Delete"
            onClick={this.props.deleteHandler}
          />
        </ListItem>
      </React.Fragment>
    );
  }
}

export default Todo;
