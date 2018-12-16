import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";
import Button from "../ui/Button";

class Dashboard extends Component {
  render() {
    const { name } = this.props.auth.user;
    return (
      <User>
        <div>
          <div className="user_nfo_panel">
            <h1>User information</h1>
            <div>
              <span>{name}</span>
            </div>
            <Button
              type="default"
              title="Edit account info"
              linkTo="/user/user-profile"
            />
          </div>
          <div className="user_nfo_panel">
            <h1>History purchases</h1>
            <div className="user_product_block_wrapper">Something</div>
          </div>
        </div>
      </User>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
