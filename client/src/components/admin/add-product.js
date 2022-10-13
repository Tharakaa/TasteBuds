import React, { Component } from "react";
import axios from "axios";
import "./add-product.css";
import Sidebar from "./sidebar.js";
import noImage from "../../assets/img/no-image.jpg";

class AdminAddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price: 0.0,
     qty:"",
     outlet:"",
     image:""
     
     
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="addnewItem">
      <Sidebar/>
      <div className="addItemContainer">
                   <div className="addItemTop">
                      <h3>Add New Product
                      </h3>
                   </div>
                   <div className="addItemBottom">
                      <div className="addLeft">
                          <img 
                          src={noImage}
                          alt=""
                          />
                      </div>
                      <div className="addRight">
                          <form>
                          {/* <div className="formInput">
                                  <label htmlFor="file">
                                      Add image : <DriveFolderUploadIcon className="icon" />
                                  </label>
                                  <input type="file" id="file" style={{ display:"none" }}/>
                              </div> */}

                              <div className="formInput">
                                  <label>Product Name</label>
                                  <input type="text" 
                                    name="title"
                                    value={this.state.title}
                                    />
                                    </div>
                              <div className="formInput">
                                  <label>Price</label>
                                  <input type="text" 
                                  name="price"
                                  value={this.state.price}
                                  />
                              </div>
                              <div className="formInput">
                                  <label>Description</label>
                                  <input type="text" 
                                    name="description"
                                    value={this.state.description}/>
                              </div>
                              <div className="formInput">
                                  <label>Qty</label>
                                  <input type="text" 
                                  name="qty"
                                  value={this.state.qty}/>
                              </div>
                              <div className="formInput">
                                  <label>Outlet</label>
                                  <input type="text" 
                                  name="outlet"
                                  value={this.state.outlat}/>
                           </div>
                           <div className="formInput">
                                  <label>Add Image URL</label>
                                  <input type="text" 
                                  name="image"
                                  value={this.state.image}/>
                           </div>

                            <button type="submit" className="btnAdd">Add Product</button>
                          </form>
                      </div>


                   </div>

      </div>
  </div>
);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { data } = await axios.post(`api/products`, {
      
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      qty: this.state.qty,
      outlet: this.state.outlet,
      imagePath: this.state.imagePath,
    });
    if (data) {
      alert("Product Added Successfully..!");
    }
  }
}

export default AdminAddProduct;
