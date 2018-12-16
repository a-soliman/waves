import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { login } from "../../actions/auth";
import Form from "../ui/Form";
import Button from "../ui/Button";
import GoogleButton from "../ui/GoogleButton";

class Login extends Component {
  state = {
    loading: false,
    formData: {
      email: {
        name: "email",
        value: "",
        type: "email",
        placeholder: "Email Address",
        validation: {
          required: true
        },
        valid: false,
        validationMessage: ""
      },
      password: {
        name: "password",
        value: "",
        type: "password",
        placeholder: "Password",
        validation: {
          required: true
        },
        valid: false,
        validationMessage: ""
      }
    },
    errors: {}
  };

  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) this.props.history.push("/dashboard");
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.attachErrorsToState({ ...nextProps.errors });
    }
  };

  attachErrorsToState = errors => {
    const formData = { ...this.state.formData };
    const otherErrors = { ...this.state.errors };

    for (const field in formData) {
      if (errors[field]) {
        formData[field].valid = false;
        formData[field].validationMessage = errors[field];
      } else {
        formData[field].valid = true;
        formData[field].validationMessage = "";
      }
      delete errors[field];
    }
    for (const field in errors) {
      otherErrors[field] = errors[field];
    }

    this.setState({ formData, errors: otherErrors });
  };

  onFormUpdate = event => {
    const newFormData = { ...this.state.formData };
    const element = event.target.name;
    const value = event.target.value;
    newFormData[element].value = value;

    this.setState({
      formData: newFormData
    });
  };

  onFormSubmit = event => {
    event.preventDefault();

    /* VALIDATE DATA */

    const userData = {};
    for (const field in this.state.formData) {
      userData[field] = this.state.formData[field].value;
    }

    this.props.login(userData);
  };
  render() {
    const { email, password } = this.state.formData;
    return (
      <div className="page_wrapper">
        <div className="container">
          <div className="register_login_container row">
            <div className="left col-md-6">
              <h1>New Customers</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis, sapiente magnam fugiat quis corporis aut libero ut
                eligendi repellat? Ducimus veniam vero facilis saepe eligendi
                sapiente ut qui quidem unde.
              </p>
              <Button
                type="default"
                title="Create an account"
                linkTo="/register"
                addStyles={{
                  margin: "10px 0 0 0"
                }}
              />
            </div>
            <div className="right col-md-6">
              <h2>Registered customers</h2>
              <p>If you have an account please login,</p>

              <Form
                fields={[email, password]}
                onChangleHandler={this.onFormUpdate}
                onSubmitHandler={this.onFormSubmit}
                submitButtonTitle="Login"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  login: userData => dispatch(login(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
