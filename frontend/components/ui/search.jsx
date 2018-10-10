import React, { Component } from 'react'
import { connect } from 'react-redux'

class UsersSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      input: ''
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.selectedUsers.length !== prevProps.selectedUsers.length) {
      this.setState({users: [], input: ''})
    }
  }

  handleChange (e) {
    let users = this.props.users.filter(user =>
      user.username.toLowerCase().includes(e.target.value.toLowerCase()))
    users = users.filter(user => !this.props.selectedUsers.map(user => user.username).includes(user.username))
    if (users.length) {
      this.setState({users: users, input: e.target.value})
    } else {
      this.setState({users: []})
    }
  }

  render () {
    let limitedList = this.state.users.slice(0, 5)
    let results =
    <ul>
      {limitedList.map((user) =>
        <li
          onClick={e => this.props.handleUsernameClick(user.username, user.id)}
          key={user.id} >{user.username}
        </li>
      )}
    </ul>
    return (
      <div className='users-search-container'>
        <div>
          {this.props.selectedUsers.length
            ? <ul>
              {this.props.selectedUsers.map((user, idx) =>
                <li onClick={(e) => this.props.removeUser(e)} key={idx}>{user.username}</li>
              )}
            </ul> : null
          }
        </div>
        <input
          className='newroom-input search'
          type="text"
          onChange={(e) => this.handleChange(e)}
          placeholder="search users..."/>
        {this.state.users && this.state.input ? results : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let users = Object.values(state.entities.users).filter(el =>
    el.id !== state.session.currentUserId) || []
  return {
    users: users
  }
}

export default connect(mapStateToProps)(UsersSearch)
