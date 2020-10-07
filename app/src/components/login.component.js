import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";
import Logo from '../assets/media/brand/logo.svg';
import Feature from '../assets/media/images/feature.svg';
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      // <div className="col-md-12">
      //   <div className="card card-container">
      //     <img
      //       src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
      //       alt="profile-img"
      //       className="profile-img-card"
      //     />

      //     <Form
      //       onSubmit={this.handleLogin}
      //       ref={c => {
      //         this.form = c;
      //       }}
      //     >
      //       <div className="form-group">
      //         <label htmlFor="username">Username</label>
      //         <Input
      //           type="text"
      //           className="form-control"
      //           name="username"
      //           value={this.state.username}
      //           onChange={this.onChangeUsername}
      //           validations={[required]}
      //         />
      //       </div>

      //       <div className="form-group">
      //         <label htmlFor="password">Password</label>
      //         <Input
      //           type="password"
      //           className="form-control"
      //           name="password"
      //           value={this.state.password}
      //           onChange={this.onChangePassword}
      //           validations={[required]}
      //         />
      //       </div>

      //       <div className="form-group">
      //         <button
      //           className="btn btn-primary btn-block"
      //           disabled={this.state.loading}
      //         >
      //           {this.state.loading && (
      //             <span className="spinner-border spinner-border-sm"></span>
      //           )}
      //           <span>Login</span>
      //         </button>
      //       </div>

      //       {this.state.message && (
      //         <div className="form-group">
      //           <div className="alert alert-danger" role="alert">
      //             {this.state.message}
      //           </div>
      //         </div>
      //       )}
      //       <CheckButton
      //         style={{ display: "none" }}
      //         ref={c => {
      //           this.checkBtn = c;
      //         }}
      //       />
      //     </Form>
      //   </div>
      // </div>


      <div className="container-fluid">
        <div className="row">
          {/* LOGIN FORM SIDE */}
          <div className="col-md-6">
            <div className="row">
              <div className="LoginForm-SideContent">
                <div className="LoginForm-Side">
                  <div className="LoginForm-Content">
                    {/* DIGI REPORTING BRAND */}
                    <div className="DigiReporing-Brand">
                      {/* <img src={require("assets/media/brand/logo.svg")} alt=""/> */}
                      <img src={Logo} alt="React Logo" />
                      {/* <Logo></Logo> */}
                    </div>
                    {/* LOGIN TITLE */}
                    <h3 className="LoginForm-Title">Authentification</h3>
                    <Form
                      className="LoginForm"
                      id="LoginForm"
                      onSubmit={this.handleLogin}
                      ref={c => {
                        this.form = c;
                      }}>
                      {/* LOGIN INPUTS */}
                      <div className="Input-Row">
                        <i className="uil uil-envelope"></i>
                        <Input
                           id="user-identifier"
                          type="text"
                          className="DRInput-Class"
                          name="username"
                          value={this.state.username}
                          onChange={this.onChangeUsername}
                          validations={[required]}
                        />
                      </div>
                      <div className="Input-Row">
                        <i className="uil uil-lock-alt"></i>
                        <Input
                          id="user-password"
                          type="password"
                          className="DRInput-Class"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChangePassword}
                          validations={[required]}
                        />
                        <span toggle="#user-password" className="uil uil-eye field-icon toggle-password"></span>
                      </div>
                      {/* LOGIN ACTIONS */}
                      <div className="LoginForm-Actions">
                        <div className="LoginForm-Action Action-Left">
                          <div className="CheckBox-Field">
                            <label className="container-checkbox">
                              <input type="checkbox"/>
                              <span className="checkmark"></span>
                              <span>Remember me</span>
                            </label>
                          </div>
                      </div>
                        <div className="LoginForm-Action Action-Right">
                          <a href="/" className="forgot-password">Forgot password?</a>
                        </div>
                      </div>
                      {/* LOGIN SUBMIT */}
                      {/* <button type="submit" name="FormLogin-Submit" className="Form-Submit"><i className="uil uil-user-check"></i> Login</button> */}
                      <div className="form-group">
                        <button
                          className="Form-Submit"
                          disabled={this.state.loading}
                        >
                          {this.state.loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          <i className="uil uil-user-check"></i> <span>Login</span>
                        </button>
                      </div>
                      {this.state.message && (
                        <div className="form-group">
                          <div className="alert alert-danger" role="alert">
                            {this.state.message}
                          </div>
                        </div>
                      )}
                      <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                          this.checkBtn = c;
                        }}
                      />
                    </Form>
                    {/* LOGIN SOCIAL OPTIONS */}
                    <div className="SocialConnect-Options">
                      <div className="SocialConnect-Col">
                        <label>or Login with:</label>
                      </div>
                      <div className="SocialConnect-Col SocialConnect-Buttons">
                        <button type="button" className="facebook" data-toggle="tooltip" data-placement="bottom" title="Login with Facebook"><i className="uim uim-facebook-f"></i></button>
                        <button type="button" className="gmail" data-toggle="tooltip" data-placement="bottom" title="Login with Gmail"><i className="uim uim-google"></i></button>
                        <button type="button" className="linkedin" data-toggle="tooltip" data-placement="bottom" title="Login with LinkedIn"><i className="uim uim-linkedin-alt"></i></button>
                      </div>
                    </div>

                    {/* COPY RIGHTS */}
                    <div className="CopyRight-Text">
                      <span>@2020 All Rights Reserved. DigiReporting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURES SIDE */}
          <div className="d-none d-sm-block col-md-6">
            <div className="Side-NoMargin">
              <div className="Features-Side">
                <div className="FeaturesSide-Content">
                  {/* CREATE AN ACCOUNT */}
                  <div className="CreateAccount-BTN">
                    <label>Don't have account ?</label>
                    <a href="/register">Sign up</a>
                  </div>
                  {/* FEATURES CAROUSEL */}
                  <div className="FeaturesCarousel-Slider">
                    <div className="Feature-Thumb">
                      <img src={Feature} alt="React Logo" />
                    </div>
                    <div className="FeaturesCarousel-Items">
                      <div className="Feature-Content">
                        <h2 className="Feature-Title">Feature Title 1</h2>
                        <p className="Feature-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                      </div>
                      <div className="Feature-Content">
                        <h2 className="Feature-Title">Feature Title 2</h2>
                        <p className="Feature-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                      </div>
                      <div className="Feature-Content">
                        <h2 className="Feature-Title">Feature Title 3</h2>
                        <p className="Feature-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                      </div>
                      <div className="Feature-Content">
                        <h2 className="Feature-Title">Feature Title 4</h2>
                        <p className="Feature-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}