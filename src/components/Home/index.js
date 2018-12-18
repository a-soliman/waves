import React, { Component } from "react";
import { connect } from "react-redux";
import HomeSlider from "./HomeSlider";
import HomePromotion from "./HomePromotion";
import CardBlock from "../ui/CardBlock";
import {
  getProductsByArrival,
  getProductsBySell
} from "../../actions/products";

class Home extends Component {
  componentDidMount = () => {
    this.props.getProductsByArrival();
    this.props.getProductsBySell();
  };

  render() {
    return (
      <div>
        <HomeSlider />
        <CardBlock
          title="Best Selling guitars"
          list={this.props.products.bySell}
        />
        <HomePromotion />
        <CardBlock title="New Arrivals" list={this.props.products.byArrival} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  products: state.products,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  getProductsByArrival: () => dispatch(getProductsByArrival()),
  getProductsBySell: () => dispatch(getProductsBySell())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
