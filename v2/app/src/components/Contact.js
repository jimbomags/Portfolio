import React, { Component } from 'react'
import Send from 'react-icons/lib/md/send'



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
  // var name = document.querySelector('#name')
  // name.addEventListener('input', (event) => {
  //   if (name.vaildity.typeMismatch) {
  //     name.setCustomValidity('Please enter your name')
  //   } else {
  //     name.setCustomValidity('')
  //   }
  // })
  render() {
    return (
      <form action='https://formspree.io/contact@jamesmcgill.co.uk' method='POST'>
        Name:
        <input type='text' name='name' id='name' value={this.state.name} onChange={this.handleChange} required/>
        E-mail:
        <input type='email' name='email' id='email' value={this.state.email} onChange={this.handleChange} required/>
        Message:
        <textarea name='message' id='message' value={this.state.message} onChange={this.handleChange} required>
        </textarea>
        <div className='submitBtn'>
          <button className='button' type='submit'>Submit</button>
        </div>
      </form>
    )
  }
}

export default ContactForm
