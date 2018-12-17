import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

class Header extends Component {
  state = {
    page: [
      {
        name: "Home",
        linkTo: "/",
        public: true
      },
      {
        name: "Guitars",
        linkTo: "/shop",
        public: true
      }
    ],
    user: [
      {
        name: "My Cart",
        linkTo: "/user/cart",
        public: false
      },
      {
        name: "My Account",
        linkTo: "/dashboard",
        public: true
      },
      {
        name: "Login",
        linkTo: "/login",
        public: true
      },
      {
        name: "Logout",
        linkTo: "/login",
        public: false
      }
    ]
  };

  defaultLink = (item, i) => {
    let linkTemplate;
    if (item.name === "Logout") {
      linkTemplate = (
        <Link to="/login" key={i} onClick={this.props.logout}>
          {item.name}
        </Link>
      );
    } else {
      linkTemplate = (
        <Link to={item.linkTo} key={i}>
          {item.name}
        </Link>
      );
    }
    return linkTemplate;
  };

  displayNavLists = type => {
    let list = [];
    if (this.props.auth && this.props.auth.user) {
      type.forEach(item => {
        if (!this.props.auth.isAuthenticated) {
          if (item.public === true) list.push(item);
        } else {
          if (item.name !== "Login") list.push(item);
        }
      });
    }
    return list.map((item, i) => {
      return this.defaultLink(item, i);
    });
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log(user);
    return (
      <header className="bck_b_light">
        <div className="container">
          <div className="left">
            <div className="logo">WAVES</div>
          </div>
          <div className="right">
            <div className="top">{this.displayNavLists(this.state.user)}</div>
            <div className="bottom">
              {this.displayNavLists(this.state.page)}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
