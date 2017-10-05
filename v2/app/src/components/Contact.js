import React, { Component } from 'react'

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
  render() {
    return (
      <form action='https://formspree.io/contact@jamesmcgill.co.uk' method='POST'>
        Name:
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
        E-mail:
        <input type='email' name='email' value={this.state.email} onChange={this.handleChange}/>
        Message:
        <textarea name='message' value={this.state.message} onChange={this.handleChange}>
        </textarea>
        <div className='submitBtn'>
          <input type='submit' value='Send'/>
        </div>
      </form>
    )
  }
}

export default ContactForm
