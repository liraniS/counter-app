import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        <Badge variant="warning" className={classes} style={this.styles}>
          {this.formatCount()}
        </Badge>
        <span className={classes} style={this.styles}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <br />
        <br />
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
        <img src={this.state.imageUrl} alt="" />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const x = <h1>Zero</h1>;
    return count === 0 ? x : count;
  }
}

export default Counter;
