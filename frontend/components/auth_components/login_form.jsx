import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import NavLinks from '../splash/nav_component'
import { ActionCable } from 'react-actioncable-provider'

export class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.guestLogin = this.guestLogin.bind(this)
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
    this.refs.RoomsChannel.perform('login_user', user)
  }

  guestLogin () {
    let user = {
      email: 'GuestEmail@guestemail.com',
      password: 'guestpassword'}
    this.refs.RoomsChannel.perform('login_user', user)
    this.props.processForm(user)
  }

  render () {
    let errors = this.props.errors.map((error, idx) => <li key={idx} >{error}</li>)
    let errorBox = null
    if (errors.length) {
      errorBox =
      <div className='errors-box'>
        <ul id='error-messages'>
          {errors}
        </ul>
      </div>
    }
    return (
      <div className='login-form-div'>
        <NavLinks/>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <div className='login-form-container'>
            <h3 className='form-title'>Welcome Back!</h3>
            <ul className='login-form-list'>
              <li>
                <label className='email-input'>Email
                  <input id='email-input' type='text' placeholder='your-name@email.com'
                    value={this.state.email} onChange={this.update('email')} />
                </label>
              </li>
              <li>
                <label className='password-input'>Password
                  <input type='password' id='password-input' placeholder='6 characters minimum'
                    value={this.state.password} onChange={this.update('password')}/>
                </label>
              </li>
              <li id='login-li'>
                <button id='submit-input' type='Submit'>Login</button>
              </li>
              <p id='or-text-login'>or</p>
              <li id='login-li'>
                <input id= 'guest-submit' onClick={() => this.guestLogin()} type="button" value='Login as Guest'/>
              </li>
            </ul>
            <ActionCable
              ref='RoomsChannel'
              channel={{ channel: 'RoomsChannel', room: 'RoomRoom' }}
            />
          </div>
        </form>
        {errorBox}
      </div>
    )
  }
}

export default withRouter(LoginForm)
