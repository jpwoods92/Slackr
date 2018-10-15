import React, { Fragment } from 'react'

export default class Room extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      members: this.props.room.member_ids
    }
  }
  componentDidUpdate (prevProps) {
    if (!this.props.room.id || !prevProps.room.id) return null
    if (prevProps.room.member_ids.length !== this.props.room.member_ids.length) {
      this.setState({
        members: this.props.room.member_ids
      })
    }
  }

  render () {
    if (this.props.room.is_private === undefined) return null
    let members = this.props.room.member_ids
    return (
      <Fragment>
        <header className='message-nav'>
          <p id='header-title'>#{this.props.room.title}</p>
          <p id='num-users'><img id='user-count-icon' src={window.userCount} alt="user-count-icon"/>{members.length}</p>
        </header>
      </Fragment>
    )
  }
}
