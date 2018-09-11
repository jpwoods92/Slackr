import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

export class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
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
    let errors = this.props.errors.map((error) => <p>{error}</p>)
    return (
      <div>
        <header>
          <h3>{this.props.formType}</h3>
          <Link to={`/login/${this.props.formType.toLowerCase()}`}></Link>
        </header>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <label htmlFor='email-input'>Email
            <input id='email-input' type='email' placeholder='OliverBall@coolpeeps.com'
              pattern='.+@gmail.com' size='30' required
              value={this.state.email} onChange={this.update('email')} />
            {errors}
          </label>
          <label htmlFor='password-input'>Password
            <input type='password' id='password-input' minLength='6'
              required placeholder='6 characters minimum'
              value={this.state.password} onChange={this.update('password')}/>
            {errors}
          </label>
          <input id='submit-input' type='Submit' value={this.props.formType}/>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)
