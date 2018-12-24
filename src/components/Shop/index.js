import React, { Component } from "react";
import { connect } from "react-redux";
import PageTop from "../ui/PageTop";
import CollapseCheckbox from "../ui/CollapseCheckbox";
import CollapseRadio from "../ui/CollapseRadio";
import { frets, price } from "../ui/FixedCategories";
import LoadMoreCards from "./LoadMoreCards";
import { getProductsToShop, getBrands, getWoods } from "../../actions/products";

class Shop extends Component {
  state = {
    grid: "",
    limit: 6,
    skip: 0,
    filters: {
      brand: [],
      frets: [],
      wood: [],
      price: []
    }
  };

  componentDidMount = () => {
    this.props.getBrands();
    this.props.getWoods();
    this.props.getProductsToShop({
      skip: this.state.skip,
      limit: this.state.limit,
      filters: this.state.filters
    });
  };

  handlePrice = value => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };

  handleFilters = (filters, category) => {
    const newFilters = { ...this.state.filters };
    newFilters[category] = filters;

    if (category === "price") {
      let priceValues = this.handlePrice(filters);
      newFilters[category] = priceValues;
    }

    this.showFilteedResults(newFilters);
    this.setState({ filters: newFilters });
  };

  showFilteedResults = filters => {
    this.props.getProductsToShop({
      skip: 0,
      limit: this.state.limit,
      filters
    });
    this.setState({ skip: 0 });
  };

  render() {
    console.log(this.state.filters);
    const { products } = this.props;
    return (
      <div>
        <PageTop title="Browse Products" />
        <div className="container">
          <div className="shop_wrapper row">
            <div className="left col-md-3">
              <CollapseCheckbox
                initState={true}
                title="Brands"
                list={products.brands}
                handleFilters={filters => this.handleFilters(filters, "brand")}
              />

              <CollapseCheckbox
                initState={false}
                title="Frets"
                list={frets}
                handleFilters={filters => this.handleFilters(filters, "frets")}
              />

              <CollapseCheckbox
                initState={false}
                title="Woods"
                list={products.woods}
                handleFilters={filters => this.handleFilters(filters, "wood")}
              />

              <CollapseRadio
                initState={true}
                title="price"
                list={price}
                handleFilters={filters => this.handleFilters(filters, "price")}
              />
            </div>

            <div className="left col-md-9">
              <div className="shop_options">
                <div className="shop_grids clear">Grids</div>
              </div>
              <div>
                <LoadMoreCards
                  grid={this.state.grid}
                  limit={this.state.limit}
                  size={products.toShopSize}
                  products={products.toShop}
                  loadMore={() => console.log("Load mroe!")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  getBrands: () => dispatch(getBrands()),
  getWoods: () => dispatch(getWoods()),
  getProductsToShop: data => dispatch(getProductsToShop(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
