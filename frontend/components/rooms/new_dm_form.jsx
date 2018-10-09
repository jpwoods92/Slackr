import { connect } from 'react-redux'
import { createRoom } from '../../actions/room_actions'
import { createMembership } from '../../actions/room_mebership_actions'
import { closeModal } from '../../actions/modal_actions'
import React from 'react'
import UserSearch from '../users/search'

class NewDMForm extends React.Component {
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
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.is_private) {
      this.props.createRoom(this.state)
      this.setState({title: ''})
    } else {
      let userIds = this.state.selectedUsers.map(user => user.id)
      userIds = [...userIds, this.props.currentUserId]
      let currentUser = this.props.users[this.props.currentUserId]
      let addCurrentUser = [...this.state.selectedUsers, currentUser]
      let users = addCurrentUser.map((el) => el.username).join(', ')
      this.props.createRoom({title: users, is_private: this.state.is_private, is_dm: true}).then((data) => {
        let roomId = data.room.id
        return this.props.createMembership({userIds: userIds, roomId: roomId})
      })
    }
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

  handleKey (e) {
    if (e.keyCode === 13 && this.state.title !== '') {
      e.preventDefault()
      e.stopPropagation()
      this.handleSubmit(e)
    }
  }

  render () {
    return (
      <div className="newroom-form-div">
        <h1 className='newroom-title'>Direct Messages</h1>
        <form className='newroom-form' onKeyDown={(e) => this.handleKey(e)} onSubmit={this.handleSubmit}>
          <div className='button-search-container'>
            {this.state.is_private ? <UserSearch
              selectedUsers={this.state.selectedUsers}
              handleUsernameClick={this.handleUsernameClick}/> : null}
            <button className='modal-button' >Go</button>
          </div>
          {this.state.selectedUsers.length
            ? <ul>
              {this.state.selectedUsers.map((user, idx) =>
                <li onClick={(e) => this.removeUser(e)} key={idx}>{user.username}</li>
              )}
            </ul> : null
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
  users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
  createRoom: (room) => dispatch(createRoom(room)),
  createMembership: (userIds) => dispatch(createMembership(userIds)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDMForm)
