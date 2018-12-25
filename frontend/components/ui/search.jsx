import React, { Component, Fragment } from 'react'
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
      this.refs.searchInput.focus()
    }
  }

  handleChange (e) {
    let users = this.props.users.filter(user => {
      return user.username.toLowerCase().includes(e.target.value.toLowerCase())
    }
    )
    users = users.filter(user => !this.props.selectedUsers.map(user => user.username).includes(user.username))
    if (users.length) {
      this.setState({users: users, input: e.target.value})
    } else {
      this.setState({users: [], input: e.target.value})
    }
  }

  render () {
    let dm
    if (this.props.isDm) {
      dm = 'dm'
    } else {
      dm = ''
    }
    let limitedList = this.state.users.slice(0, 5)
    let results =
    <ul className={`search-list ${dm}`}>
      {limitedList.map((user) =>
        <li
          onClick={e => this.props.handleUsernameClick(user.username, user.id)}
          key={user.id} >{user.username}
        </li>
      )}
    </ul>
    return (
      <Fragment>
        <div className={`users-search-container ${dm}`}>
          {this.props.selectedUsers.length
            ? <ul>
              {this.props.selectedUsers.map((user, idx) =>
                <li onClick={(e) => this.props.removeUser(e)} key={idx}>{user.username}</li>
              )}
            </ul> : null
          }
          <input
            ref='searchInput'
            className={`newroom-input search ${dm}`}
            type="text"
            onChange={(e) => this.handleChange(e)}
            placeholder="search users..."
            value={this.state.input}
          />
        </div>
        {this.state.users && this.state.input ? results : null}
      </Fragment>
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
