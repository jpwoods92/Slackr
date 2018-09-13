import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import NavLinks from '../nav_component'

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

  componentDidMount () {
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
    this.props.processForm(user).then(null, () => this.setState({
      email: '',
      password: '',
      errors: this.props.errors
    }))
  }

  render () {
    let errors = this.state.errors.map((error) => <p>{error}</p>)
    return (
      <div>
        <NavLinks/>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div className='signup-form-container'>
            <ul className='signup-form-list'>
              <li>
                <label className='email-input'>Email
                  <input id='email-input' type='text' placeholder='OliverBall@coolpeeps.com'
                    value={this.state.email} onChange={this.update('email')} />
                </label>
                {errors.filter}
              </li>
              <li>
                <label className='username-input'>Username
                  <input type='text' id='username-input' placeholder='OliverBall'
                    value={this.state.username} onChange={this.update('username')}/>
                </label>
              </li>
              <li>
                <label className='password-input'>Password
                  <input type='password' id='password-input' placeholder='6 characters minimum'
                    value={this.state.password} onChange={this.update('password')}/>
                </label>
                {errors}
              </li>
              <li>
                <label htmlFor='avatar-link-input'>Avatar Link
                  <input id='avatar-link-input' type='text'
                    placeholder='https://oliverball.com/smiley+face'
                    value={this.state.avatarUrl} onChange={this.update('avatarUrl')}/>
                </label>
              </li>
              <li>
                <input id='submit-input' type='Submit' value={this.props.formType}/>
              </li>
              <li>
                <p>or</p>
                <Link id='sign-in-link' to='/login'>Log in as guest</Link>
              </li>
            </ul>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignupForm)
