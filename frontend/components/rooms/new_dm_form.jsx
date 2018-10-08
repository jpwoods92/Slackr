import React from 'react'
import { connect } from 'react-redux'
import { createRoom } from '../../actions/room_actions'
import { createMembership } from '../../actions/room_mebership_actions'
import { closeModal } from '../../actions/modal_actions'
import UserSearch from '../users/search'

class NewRoomForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      is_private: false,
      falseText: false,
      empty: true,
      justOpened: true,
      selectedUsers: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleUsernameClick = this.handleUsernameClick.bind(this)
  }

  handleChange (e) {
    if (e.target.value === '' && !this.state.justOpened) {
      this.setState({ justOpened: false, empty: true, falseText: false, title: e.target.value.replace(/[#.]/g, '') })
    } else if (!e.target.value.match(/[a-zA-Z0-9]/g)) {
      this.setState({ justOpened: false, empty: false, falseText: true, title: e.target.value.replace(/[#.]/g, '') })
    } else {
      this.setState({ justOpened: false, empty: false, falseText: false, title: e.target.value.replace(/[#.]/g, '') })
    }
  };

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.is_private) {
      this.props.createRoom(this.state)
      this.setState({title: ''})
    } else {
      let usernames = this.state.selectedUsers.map(user => user.username)
      let userIds = Object.keys(this.state.selectedUsers)
      this.props.createRoom({title: this.state.title, is_private: this.state.is_private}).then(() => {
        this.props.createMembership(userIds)
        this.setState({
          title: '',
          selectedUsers: []
        })
      })
    }
    this.props.closeModal()
  }

  handleUsernameClick (username, id) {
    this.setState({
      selectedUsers: [...this.state.selectedUsers, {id: username}]
    })
  }

  removeUser (e) {
    let usernames = this.state.selectedUsers.slice()
    let userIds = this.state.userIds.slice()
    usernames = usernames.filter((name) => name !== e.target.innerText)
    userIds = userIds.filter((id) => id !== e.target)
    this.setState({
      selectedUsers: usernames,
      selectedUserIds: userIds
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
    let error, button
    if (this.state.falseText && !this.state.empty) {
      error = <p className='error-text'>please input more than just symbols/spaces</p>
      button = <button disabled className='modal-button-disabled' >Create Channel</button>
    } else if (!this.state.falseText && this.state.empty && !this.state.justOpened) {
      error = <p className='error-text'>don't forget your title!</p>
      button = <button disabled className='modal-button-disabled' >Create Channel</button>
    } else if (this.state.justOpened) {
      button = <button disabled className='modal-button-disabled' >Create Channel</button>
    } else {
      button = <button className='modal-button' >Create Channel</button>
    }
    return (
      <div className="newroom-form-div">
        <h1 className='newroom-title'>Create a channel</h1>
        <p className='newroom-body'>Channels are where your members communicate. They’re best when organized around a topic — #leads, for example.</p>
        <form className='newroom-form' onKeyDown={(e) => this.handleKey(e)} onSubmit={this.handleSubmit}>
          <div className='switch-text-container' onClick={this.handleClick}>
            <div className='switch'>
              <input type="checkbox" readOnly checked={this.state.is_private}/>
              <span className="slider round"></span>
            </div>
            <div className='text-label' >Anyone in your workspace can view and join this channel.</div>
          </div>
          <span className='title-label'>Name</span>
          {error}
          <input
            maxLength= '22'
            className='newroom-input'
            type="text"
            autoComplete = 'off'
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
            placeholder='# e.g. leads'
          />
          <span className='input-subtext'>Names must be lowercase, without spaces or periods, and shorter than 22 characters.</span>
          {this.state.is_private ? <UserSearch
            selectedUsers={this.state.selectedUsers}
            handleUsernameClick={this.handleUsernameClick}/> : null}
          {this.state.selectedUsers.length
            ? <ul>{this.state.selectedUsers.map((username, idx) =>
              <li onClick={(e) => this.removeUser(e)} key={idx}>{username}</li>)}</ul> : null}
          <div className='button-container'>
            <button className='cancel-button'
              onClick={(e) => { e.preventDefault(); this.props.closeModal() }}>Cancel</button>
            {button}
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createRoom: (room) => dispatch(createRoom(room)),
  createMembership: (userId, roomId) => dispatch(createMembership(userId, roomId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(null, mapDispatchToProps)(NewRoomForm)
