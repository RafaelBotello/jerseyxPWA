import React from "../../../node_modules/react";
import Navbar from "../../Components/Navbar";
import "../../Components/Products/style.css";
import Products from "../../Components/Products";
import Filters from "../../Components/Filters";
import Footer from "../../Components/Footer";

class ProductsPage extends React.Component {
  state = {
    error: null,
    products: [],
    filters: []
  };

  maincont = {
    marginTop: "84px",
    height: "80vh",
    display: "block"
  };

  componentDidMount() {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        if (data) {
          this.setState({
            products: data
          });
        }
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  }

  onHandleFilterLow = e => {
    console.log(this.state.products);
    let productLow = this.state.products.sort(function(a, b) {
      return a.price - b.price;
    });
    this.setState({
      products: productLow
    });
  };

  onHandleFilterHigh = e => {
    console.log(this.state.products);
    let productHigh = this.state.products.sort(function(a, b) {
      return b.price - a.price;
    });
    this.setState({
      products: productHigh
    });
  };

  onHandleFilter = e => {
    const filter = e.target.value;
    console.log(this.state.products);
    let filters = [filter];
    if (filter === "all") {
      filters = [];
    }

    this.setState({
      filters
    });
  };

  render() {
    const { filters } = this.state;

    return (
      <>
        <div className="container-fluid" style={this.maincont}>
          <div className="row main-cont">
            <Filters
              handleFilter={this.onHandleFilter}
              handleFilterLow={this.onHandleFilterLow}
              handleFilterHigh={this.onHandleFilterHigh}
            />
            <div id="products" className="col-md-9 bg-light">
              <div className="row">
                {this.state.products.map((product, index) => {
                  // Loop through each product
                  // And render them all
                  if (
                    filters.length > 0 &&
                    !filters.includes(product.category)
                  ) {
                    return;
                  }

                  return (
                    <Products
                      key={index}
                      dataprice1={product.price}
                      class1={product.class1}
                      dataprice2={product.price}
                      class2={product.class2}
                      name={product.product_name}
                      description={product.product_description}
                      colors={product.colors}
                      product_id={product.id_products}
                      category={product.category}
                    />
                  );
                })}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default ProductsPage;

//
