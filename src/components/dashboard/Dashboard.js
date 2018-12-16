import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";

class Dashboard extends Component {
  render() {
    return (
      <User>
        <div className="full-height d-flex justify-content-center align-items-center">
          <h1 className="display-2 mb-5">Dashboard</h1>
          <h4>
            hey <strong>{this.props.auth.user.name}</strong>,
          </h4>
          <p className="lead">
            This is a private route, Can only be displayed and visited by logged
            in users.
          </p>
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
