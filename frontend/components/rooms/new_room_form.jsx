import React from 'react'
import { connect } from 'react-redux'
import { createRoom } from '../../actions/room_actions'
import { closeModal } from '../../actions/modal_actions'

class NewRoomForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      is_private: false,
      falseText: false,
      empty: true,
      justOpened: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    if (e.target.value === '' && !this.state.justOpened) {
      this.setState({ justOpened: false, empty: true, falseText: false, title: e.target.value.replace(/#|./g, '') })
    } else if (!e.target.value.match(/[a-zA-Z0-9]/g)) {
      this.setState({ justOpened: false, empty: false, falseText: true, title: e.target.value.replace(/#|./g, '') })
    } else {
      this.setState({ justOpened: false, empty: false, falseText: false, title: e.target.value.replace(/#|./g, '') })
    }
  };

  handleSubmit (e) {
    e.preventDefault()
    this.props.createRoom(this.state)
    this.props.closeModal()
    this.setState({title: ''})
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
      error = <p id='error-text'>please input more than just symbols/spaces</p>
      button = <button disabled className='modal-button-disabled' >Create Channel</button>
    } else if (!this.state.falseText && this.state.empty && !this.state.justOpened) {
      error = <p id='error-text'>don't forget your title!</p>
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
          <span id='title-label'>Name</span>
          {error}
          <input
            maxLength= '22'
            id='newroom-input'
            type="text"
            autoComplete = 'off'
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
            placeholder='# e.g. leads'
          />
          <span id='input-subtext'>Names must be lowercase, without spaces or periods, and shorter than 22 characters.</span>
          <div className='button-container'>
            <button className='cancel-button' onClick={(e) => { e.preventDefault(); this.props.closeModal() }}>Cancel</button>
            {button}
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createRoom: (room) => dispatch(createRoom(room)),
  closeModal: () => dispatch(closeModal())
})

export default connect(null, mapDispatchToProps)(NewRoomForm)
