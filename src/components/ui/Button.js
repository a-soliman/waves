import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  const buttons = () => {
    let template = "";

    switch (props.type) {
      case "default":
        template = (
          <Link
            className="link_default"
            to={props.linkTo}
            style={{ ...props.addStyles }}
          >
            {props.title}
          </Link>
        );
        break;

      case "submitButton":
        template = (
          <button
            className="link_default"
            type="submit"
            style={{ ...props.addStyles }}
          >
            {props.title}
          </button>
        );
        break;
      default:
        template = "";
    }
    return template;
  };
  return buttons();
};

export default Button;
