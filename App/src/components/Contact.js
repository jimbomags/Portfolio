import React, { Component } from 'react';
import Github from 'react-icons/lib/fa/github';
import Envelope from 'react-icons/lib/fa/envelope';
import PropTypes from 'prop-types';

const Input = ({ type, name, value, onChange, error }) => {
  const className = error ? 'error-input' : '';
  return (
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={className}
    />);
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

const TextArea = ({ value, onChange, error }) => {
  const className = error ? 'error-input' : '';
  return (
    <textarea
      name="message"
      id="message"
      value={value}
      onChange={onChange}
      className={className}
    />);
};

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

const ErrorMessage = ({ error, text }) => {
  if (error) {
    return (<span className="error">{text}</span>);
  }
  return null;
};

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};

const ContactFormPresentation = ({
  handleChange,
  handleSubmit,
  nameValue,
  emailValue,
  messageValue,
  nameError,
  emailError,
  messageError,
}) => (
  <div id="contact">
    <h2>How to reach me...</h2>
    <div id="contact-container">
      <form id="form" onSubmit={handleSubmit} action="https://formspree.io/contact@jamesmcgill.co.uk" method="POST">
        <label>Name:</label>
        <Input type="text" name="name" value={nameValue} onChange={handleChange} error={nameError} />
        <ErrorMessage error={nameError} text="Please enter your name" />
        <label>E-mail:</label>
        <Input type="email" name="email" value={emailValue} onChange={handleChange} error={emailError} />
        <ErrorMessage error={emailError} text="Please enter a vaild email address" />
        <label>Message:</label>
        <TextArea value={messageValue} onChange={handleChange} error={messageError} />
        <ErrorMessage error={messageError} text="Don't forget to say something!" />
        <div className="submitBtn">
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
      <div id="contact-icons">
        <a href="https://github.com/jimbomags" target="_blank" rel="noreferrer noopener"><Github /></a>
        <a href="mailto:contact@jamesmcgill.co.uk"><Envelope /></a>
      </div>
    </div>
  </div>
);

ContactFormPresentation.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  nameError: PropTypes.bool.isRequired,
  emailError: PropTypes.bool.isRequired,
  messageError: PropTypes.bool.isRequired,
};


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      emailValue: '',
      messageValue: '',
      nameError: false,
      emailError: false,
      messageError: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const nameValue = `${event.target.name}Value`;

    this.setState({
      [nameValue]: event.target.value,
    });
  }
  handleSubmit(event) {
    if (!this.state.nameValue) {
      this.setState({
        nameError: true,
      });
      event.preventDefault();
    }
    if (!this.state.emailValue) {
      this.setState({
        emailError: true,
      });
      event.preventDefault();
    }
    if (!this.state.messageValue) {
      this.setState({
        messageError: true,
      });
      event.preventDefault();
    }
  }
  render() {
    return (
      <ContactFormPresentation
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        nameValue={this.state.nameValue}
        emailValue={this.state.emailValue}
        messageValue={this.state.messageValue}
        nameError={this.state.nameError}
        emailError={this.state.emailError}
        messageError={this.state.messageError}
      />);
  }
}

export default ContactForm;
