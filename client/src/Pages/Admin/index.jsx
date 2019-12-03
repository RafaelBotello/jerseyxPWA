import React, { Component } from "react";
import Footer from "../../Components/Footer";
import axios from "axios";
import "./style.css";

export class Admin extends Component {
  constructor(props) {
    super(props);

    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeProductDescription = this.onChangeProductDescription.bind(
      this
    );
    this.onChangeColors = this.onChangeColors.bind(this);
    this.onChangeDataprice = this.onChangeDataprice.bind(this);
    this.onChangeClass1 = this.onChangeClass1.bind(this);
    this.onChangeClass2 = this.onChangeClass2.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      product_name: "",
      product_description: "",
      colors: "",
      dataprice: "",
      class1: "",
      class2: "",
      category: ""
    };
  }

  onChangeProductName(e) {
    this.setState({
      product_name: e.target.value
    });
  }

  onChangeProductDescription(e) {
    this.setState({
      product_description: e.target.value
    });
  }

  onChangeColors(e) {
    this.setState({
      colors: e.target.value
    });
  }

  onChangeClass1(e) {
    this.setState({
      class1: e.target.value
    });
  }

  onChangeClass2(e) {
    this.setState({
      class2: e.target.value
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }

  onChangeDataprice(e) {
    this.setState({
      dataprice: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      product_name: this.state.product_name,
      product_description: this.state.product_description,
      colors: this.state.colors,
      dataprice: this.state.dataprice,
      class1: this.state.class1,
      class2: this.state.class2,
      category: this.state.category
    };

    console.log(product);

    axios.post("api/Product", product).then(res => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div classNam="container-fluid">
        <div className="row adminpage">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1>Add Product</h1>
            <h2>This is a protected route only accesible via login.</h2>
            <form onSubmit={this.onSubmit} className="form-group">
              <label>Product name: </label>
              <input
                required
                className="form-control"
                value={this.state.product_name}
                onChange={this.onChangeProductName}
                type="text"
              ></input>
              <label>Product Description: </label>
              <input
                required
                className="form-control"
                value={this.state.product_description}
                onChange={this.onChangeProductDescription}
                type="text"
              ></input>
              <label>Class 1:</label>
              <input
                required
                className="form-control"
                value={this.state.class1}
                onChange={this.onChangeClass1}
                type="text"
              ></input>
              <label>Class 2:</label>
              <input
                required
                className="form-control"
                value={this.state.class2}
                onChange={this.onChangeClass2}
                type="text"
              ></input>
              <label>Colors</label>
              <input
                required
                className="form-control"
                value={this.state.colors}
                onChange={this.onChangeColors}
                type="text"
              ></input>
              <label>Dataprice</label>
              <input
                required
                className="form-control"
                value={this.state.dataprice}
                onChange={this.onChangeDataprice}
                type="text"
              ></input>
              <label>Category:</label>
              <input
                required
                className="form-control"
                value={this.state.category}
                onChange={this.onChangeCategory}
                type="text"
              ></input>
              <br></br>
              <div className="form-group">
                <input
                  type="submit"
                  value="Add product"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }

  // async populateProductsData() {
  //   const response = await fetch("https://localhost:5001/api/Product");
  //   const data = await response.json();
  //   this.setState({ products: data, loading: false });
  // }
}
