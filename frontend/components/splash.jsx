
import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Splash extends React.Component {
  render () {
    let button
    if (this.props.loggedIn) {
      button = (
        <div>
          <h1>{this.props.currentUser.username}</h1>
          <button onClick={this.props.logout} >Log Out</button>
        </div>
      )
    }

    return (
      <section>
        {button}
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
      </section>
    )
  }
}

export default withRouter(Splash)
