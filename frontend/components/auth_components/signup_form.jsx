import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

export class SignupForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      avatarUrl: '',
      errors: this.props.errors
    }
    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.props.processForm(user).then(
      () => this.setState({username: '', password: '', avatarUrl: ''}))
  }
  render () {
    let errors = this.state.errors.map((error) => <p>{error}</p>)
    return (
      <div>
        <header>
          <h3>{this.props.formType}</h3>
          <Link to={`/login/${this.props.formType.toLowerCase()}`}></Link>
        </header>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <label htmlFor='email-input'>Email
            <input id='email-input' type='email' placeholder='OliverBall@coolpeeps.com'
              size='30' required
              value={this.state.email} onChange={this.update('email')} />
            {errors}
          </label>
          <label htmlFor='username-input'>Username
            <input type='text' id='username-input' placeholder='OliverBall'
              value={this.state.username} onChange={this.update('username')}/>
          </label>
          <label htmlFor='password-input'>Password
            <input type='password' id='password-input' minLength='6'
              required placeholder='8 characters minimum'
              value={this.state.password} onChange={this.update('password')}/>
          </label>
          <label htmlFor='avatar-link-input'>Avatar Link
            <input id='avatar-link-input' type='url' pattern='https://.*'
              placeholder='https://oliverball.com/smiley+face'
              value={this.state.avatarUrl} onChange={this.update('avatarUrl')}/>
          </label>
          <input id='submit-input' type='Submit' value={this.props.formType}/>
        </form>
      </div>
    )
  }
}

export default withRouter(SignupForm)
