import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  return (
    <div className='call-to-action-card'>
      <h2 id='call-to-action-title' >Where Slackrs Happens</h2>
      <p id='call-to-action-body'>When your team needs to slack off during a project,
      fire a new employee, deploy some bad code, finalize next year's debt,
      plan your next office downsizing, and more, Slackr has you covered.</p>
      <img id='work-img' alt='slackr-work-img' src={window.workImg} />
      <Link id='get-started-button' to='/signup'>GET STARTED</Link>
      <p id='sign-in-text'>Already using Slack?<Link to='/login'> Sign in.</Link></p>
    </div>
  )
}
