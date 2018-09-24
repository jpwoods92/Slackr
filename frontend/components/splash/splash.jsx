
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import NavLinks from './nav_component'
import CallToAction from './call_to_action'
import MarketingComponent from './marketing'

class Splash extends React.Component {
  render () {
    return (
      <div className='body'>
        <NavLinks/>
        <CallToAction />
        <MarketingComponent />
      </div>
    )
  }
}

export default withRouter(Splash)
