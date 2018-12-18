import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  const buttons = () => {
    let template = "";

    switch (props.type) {
      case "default":
        template = (
          <Link
            className={!props.altClass ? "link_default" : props.altClass}
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

      case "bag_link":
        template = (
          <div
            className="bag_link"
            onClick={() => {
              props.runAction();
            }}
          >
            <i className="fa fa-shopping-bag" />
          </div>
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
