import React, { Component } from "react";
import { connect } from "react-redux";
import PageTop from "../ui/PageTop";
import CollapseCheckbox from "../ui/CollapseCheckbox";
import { getBrands, getWoods } from "../../actions/products";

class Shop extends Component {
  componentDidMount = () => {
    this.props.getBrands();
    this.props.getWoods();
  };

  handleFilters = (filters, type) => {
    console.log("tiggered handleFilters...");
  };
  render() {
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
