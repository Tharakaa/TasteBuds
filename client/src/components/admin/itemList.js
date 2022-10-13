import React, { Component } from "react";
import axios from "axios";
import Item from "./Item";
class itemList extends Component {
  state = {
    allProduct: [],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.allProduct.map((product) => (
            <div key={product.productId} className="col">
              <Item
                key={product.productId}
                product={product}
                onDelete={() => this.deleteProduct(product.productId)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    var token = localStorage.getItem("token");
    console.log(token);
    var isAdmin = localStorage.getItem("isAdmin");
    console.log(isAdmin);
    const { data } = await axios.get("api/itemList");
    let products = data.map((product) => {
      return {
        productId: product._id,
       
        title: product.title,
        description: product.description,
        price: product.price,
        qty: product.qty,
        outlet: product.outlet,
        imagePath: product.imagePath,
      };
    });
    console.log(products);
    this.setState({ allProduct: products });
  }

  async deleteProduct(id) {
    await axios.delete(`api/itemList/${id}`);
    let updatedProducts = this.state.allProduct.filter(
      (product) => product.productId !== id
    );
    this.setState({ allProduct: updatedProducts });
  }
}
export default itemList;