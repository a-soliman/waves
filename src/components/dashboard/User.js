import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    name: "My account",
    linkTo: "/dashboard"
  },
  {
    name: "User information",
    linkTo: "/user/user-profile"
  },
  {
    name: "My Cart",
    linkTo: "/user/cart"
  }
];

const User = props => {
  return (
    <div className="container">
      <div className="user_container">
        <div className="user_left_nav">Navigation</div>
        <div className="user_right">{props.children}</div>
      </div>
    </div>
  );
};

export default User;
