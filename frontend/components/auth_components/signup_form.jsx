import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import NavLinks from '../splash/nav_component'

export class SignupForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      avatarUrl: '',
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.props.clearErrors()
    this.setState({
      email: '',
      password: '',
      errors: []
    })
  }

  update (field) {
    return (e) => {
      this.setState(
        {[field]: e.target.value}
      )
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
  }

  render () {
    if (!this.props.errors) return null
    let errors = this.props.errors.map((error, idx) => <li key={idx} >{error}</li>)
    let errorBox = null
    if (errors.length) {
      errorBox =
      <div className='errors-box-signup'>
        <ul id='error-messages'>
          {errors}
        </ul>
      </div>
    }
    return (
      <div className='signup-form-div'>
        <NavLinks/>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div className='signup-form-container'>
            <h3 className='form-title-signup'>Welcome to Slackr!</h3>
            <ul className='signup-form-list'>
              <li>
                <label className='email-input'>Email
                  <input id='email-input' type='text' placeholder='your-name@email.com'
                    value={this.state.email} onChange={this.update('email')} />
                </label>
              </li>
              <li>
                <label className='username-input'>Username
                  <input type='text' id='username-input' placeholder='your name'
                    value={this.state.username} onChange={this.update('username')}/>
                </label>
              </li>
              <li>
                <label className='password-input'>Password
                  <input type='password' id='password-input' placeholder='6 characters minimum'
                    value={this.state.password} onChange={this.update('password')}/>
                </label>
              </li>
              <li>
                <label className='avatar-link-input'>Avatar Link
                  <input id='avatar-link-input' type='text'
                    placeholder='https://google.com/images...'
                    value={this.state.avatarUrl} onChange={this.update('avatarUrl')}/>
                </label>
              </li>
              <li id= 'submit-li'>
                <button id='submit-input' type='Submit'>Sign Up</button>
              </li>
              <li id='transfer-to-login'>
                <p id='or-text'>or</p>
                <Link id='sign-in-link' to='/login'>Login as guest</Link>
              </li>
            </ul>
          </div>
        </form>
        {errorBox}
      </div>
    )
  }
}

export default withRouter(SignupForm)
