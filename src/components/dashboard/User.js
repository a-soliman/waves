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
  const generateLinks = links =>
    links.map((item, i) => (
      <Link key={i} to={item.linkTo}>
        {item.name}
      </Link>
    ));
  return (
    <div className="container">
      <div className="user_container row">
        <div className="user_left_nav col-md-3">
          <h2>My account</h2>
          <div className="links">{generateLinks(links)}</div>
        </div>
        <div className="user_right col-md-9">{props.children}</div>
      </div>
    </div>
  );
};

export default User;
