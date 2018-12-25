import React, { Fragment } from 'react'
import UserSearch from '../ui/search'
import { ActionCable } from 'react-actioncable-provider'

export default class NewDMForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      is_private: true,
      falseText: false,
      empty: true,
      justOpened: true,
      selectedUsers: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleUsernameClick = this.handleUsernameClick.bind(this)
    this.removeUser = this.removeUser.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    let userIds = this.state.selectedUsers.map(user => user.id)
    userIds = [...userIds, this.props.currentUserId]
    let currentUser = this.props.users[this.props.currentUserId]
    let addCurrentUser = [...this.state.selectedUsers, currentUser]
    let users = addCurrentUser.map((el) => el.username).join(', ')
    this.refs.RoomsChannel.perform('create_room', {
      title: users,
      is_private: this.state.is_private,
      user_ids: userIds,
      is_dm: true,
      owner_id: this.props.currentUserId
    })
    this.props.closeModal()
  }

  handleUsernameClick (username, id) {
    this.setState({
      selectedUsers: [...this.state.selectedUsers, {id: id, username: username}]
    })
  }

  removeUser (e) {
    let users = this.state.selectedUsers.slice()
    users = users.filter((user) => user.username !== e.target.innerText)
    this.setState({
      selectedUsers: users
    })
  }

  handleClick () {
    this.setState({is_private: !this.state.is_private})
  }

  render () {
    let button
    if (this.state.selectedUsers.length < 1) {
      button = <button disabled className='dm-button disabled' >Go</button>
    } else {
      button = <button className='dm-button' >Go</button>
    }
    return (
      <Fragment>
        <h1 className='newroom-title'>Direct Messages</h1>
        <form className='newroom-form dm' onSubmit={this.handleSubmit}>
          <ActionCable
            ref='RoomsChannel'
            channel={{ channel: 'RoomsChannel', room: 'RoomRoom' }}
          />
          <div className='search-and-button'>
            {button}
            {this.state.is_private ? <UserSearch
              isDm='true'
              selectedUsers={this.state.selectedUsers}
              handleUsernameClick={this.handleUsernameClick}
              removeUser={this.removeUser}
            /> : null}
          </div>
        </form>
      </Fragment>
    )
  }
}
