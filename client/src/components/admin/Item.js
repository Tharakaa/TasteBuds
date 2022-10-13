import React, { Component } from "react";
class Item extends Component {
  state = {};
  render() {
    if ("true" === localStorage.getItem("isAdmin")) {
      return (
        <div className="card" style={{ width: "18rem" }}>
          <img src={this.props.product.imagePath} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.product.title}</h5>
            <p className="card-text">{this.props.product.description}</p>
            <h6 className="card-text">Rs .{this.props.product.price}</h6>
            <button
              className="btn btn-outline-dark"
              onClick={this.props.onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card" style={{ width: "18rem" }}>
          <img src={this.props.product.imagePath} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.product.title}</h5>
            <p className="card-text">{this.props.product.description}</p>
            <h6 className="card-text">Rs .{this.props.product.price}</h6>
          </div>
        </div>
      );
    }
  }
}

export default Item;