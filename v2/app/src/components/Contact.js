import React, { Component } from 'react'
import Github from 'react-icons/lib/fa/github'
import Envelope from 'react-icons/lib/fa/envelope'


class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    let name = event.target.name

    this.setState({
      [name]: event.target.value
    })
  }
  componentDidMount() {
    let form = document.querySelector('#form')
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let message = document.querySelector('#message')
    let nameError = document.querySelector('#name-error')
    let emailError = document.querySelector('#email-error')
    let messageError = document.querySelector('#message-error')

    form.addEventListener('submit', (event) => {
      if (name.value.length == 0) {
        name.classList.add('error-input')
        nameError.classList.add('error')
        nameError.innerText = 'Please enter your name'
        event.preventDefault()
      }
      if (email.value.length == 0) {
        email.classList.add('error-input')
        emailError.classList.add('error')
        emailError.innerText = 'Please enter a vaild email address'
        event.preventDefault()
      }
      if (message.value.length == 0) {
        message.classList.add('error-input')
        messageError.classList.add('error')
        messageError.innerText = "Don't forget to say something!"
        event.preventDefault()
      }
    })
  }
  render() {
    return (
      <div id='contact-container'>
        <form id='form' action='https:formspree.io/contact@jamesmcgill.co.uk' method='POST'>
          Name:
          <input type='text' name='name' id='name' value={this.state.name} onChange={this.handleChange} />
          <span id='name-error'></span>
          E-mail:
          <input type='email' name='email' id='email' value={this.state.email} onChange={this.handleChange} />
          <span id='email-error'></span>
          Message:
          <textarea name='message' id='message' value={this.state.message} onChange={this.handleChange}>
          </textarea>
          <span id='message-error'></span>
          <div className='submitBtn'>
            <button className='button' type='submit'>Submit</button>
          </div>
        </form>
        <div id='contact-icons'>
          <a href='https://github.com/jimbomags' target='_blank'><Github /></a>
          <a href='mailto:contact@jamesmcgill.co.uk'><Envelope /></a>
        </div>
      </div>
    )
  }
}

export default ContactForm
