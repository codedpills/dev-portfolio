import React, { Component } from "react";
import emailjs, { init } from "emailjs-com";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  componentDidMount() {
    init("user_TfJj1VFlQh7GqcCfyPtzs");
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      from_name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    emailjs.send("service_cfipy5s", "template_upmnkkj", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };
  render() {
    return (
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h4 className="text-uppercase text-center">contact</h4>
              <p className="text-center">Want to work on a project together?</p>
              <br />
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-warning rounded-pill">
                  Contact me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
