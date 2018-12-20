import React, { Component } from "react";
import { connect } from "react-redux";
import PageTop from "../ui/PageTop";
import CollapseCheckbox from "../ui/CollapseCheckbox";
import { frets } from "../ui/FixedCategories";
import { getBrands, getWoods } from "../../actions/products";

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
  };

  handleFilters = (filters, category) => {
    const newFilters = { ...this.state.filters };
    newFilters[category] = filters;

    this.setState({ filters: newFilters });
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
                initState={true}
                title="Woods"
                list={products.woods}
                handleFilters={filters => this.handleFilters(filters, "wood")}
              />
            </div>

            <div className="left col-md-9">right</div>
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
  getWoods: () => dispatch(getWoods())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
