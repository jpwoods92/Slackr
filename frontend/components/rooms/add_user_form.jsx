import React, { Fragment } from 'react'
import { ActionCable } from 'react-actioncable-provider'

export default class AddUserForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      selectedUser: {username: '', id: 0},
      input: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsernameClick = this.handleUsernameClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    let users = this.props.users.filter(user =>
      user.username.toLowerCase().includes(e.target.value.toLowerCase()))
    users = users.filter(user => this.state.selectedUser.username !== user.username)
    if (users.length) {
      this.setState({users: users, input: e.target.value, selectedUser: {username: e.target.value, id: 0}})
    } else {
      this.setState({users: [], input: e.target.value, selectedUser: {username: e.target.value, id: 0}})
    }
  }

  parseTitle (title) {
    let nameList = []
    title.split(', ').forEach(name => {
      if (name !== this.props.currentUser.username) {
        nameList.push(name)
      }
    })
    return nameList.join(', ')
  }

  handleSubmit (e) {
    e.preventDefault()
    let userIds = this.state.selectedUsers.map(user => user.id)
    this.refs.RoomsChannel.perform('speak_add_user', {
      user_ids: userIds,
      room_id: this.props.room.id
    })
    if (this.props.room.is_dm) {
      let newTitle = this.parseTitle(this.props.room.title)
      this.refs.RoomsChannel.perform('speak_update', {
        id: this.props.room.id,
        title: newTitle
      })
    }
  }

  handleUsernameClick (username, id) {
    this.setState({
      users: [],
      selectedUser: {id: id, username: username}
    })
  }

  render () {
    if (!this.props.room) return null
    if (this.props.room.member_ids.length > 8) {
      return null
    }
    let limitedList = this.state.users.slice(0, 5)
    let results =
    <ul className='nav-users-list'>
      {limitedList.map((user) =>
        <li
          onClick={e => this.handleUsernameClick(user.username, user.id)}
          key={user.id} >{user.username}
        </li>
      )}
    </ul>
    return (
      <Fragment>
        <form className='adduser-form' onSubmit={this.handleSubmit}>
          <ActionCable
            ref='RoomsChannel'
            channel={{ channel: 'RoomsChannel', room: 'RoomRoom' }}
          />
          <div className='search-and-button'>
            <div className='nav-searchbar'>
              <input
                ref='searchInput'
                className='nav-search-input'
                type="text"
                onChange={(e) => this.handleChange(e)}
                placeholder="search users..."
                value={this.state.selectedUser.username}
              />
            </div>
            {this.state.users && this.state.input ? results : null}
          </div>
        </form>
      </Fragment>
    )
  }
}
