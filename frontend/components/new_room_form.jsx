import React from 'react'
import { connect } from 'react-redux'
import { createRoom } from '../actions/room_actions'
import { closeModal } from '../actions/modal_actions'

class NewRoomForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      is_private: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({ title: e.target.value })
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

  render () {
    return (
      <div className="newroom-form-div">
        <h1 className='newroom-title'>Create a channel</h1>
        <p className='newroom-body'>Channels are where your members communicate. They’re best when organized around a topic — #leads, for example.</p>
        <form className='newroom-form' onSubmit={this.handleSubmit}>
          <div className='switch-text-container' onClick={this.handleClick}>
            <div className='switch'>
              <input type="checkbox" readOnly checked={this.state.is_private}/>
              <span className="slider round"></span>
            </div>
            <div className='text-label' >Anyone in your workspace can view and join this channel.</div>
          </div>
          <span id='title-label'>Name</span>
          <input
            id='newroom-input'
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder='# e.g. leads'
          />
          <span id='input-subtext'>Names must be lowercase, without spaces or periods, and shorter than 22 characters.</span>
          <div className='button-container'>
            <button className='cancel-button' onClick={closeModal}>Cancel</button>
            <button className='modal-button'>Create Channel</button>
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
