import React from 'react'
import { closeModal } from '../actions/modal_actions'
import { connect } from 'react-redux'
import NewDMForm from './rooms/new_dm_form_container'
import NewRoomForm from './rooms/new_room_form_container'

function Modal ({modal, closeModal}) {
  if (!modal) {
    return null
  }
  let component
  switch (modal) {
    case 'newRoom':
      component = <NewRoomForm />
      break
    case 'newDMForm':
      component = <NewDMForm />
      break
    default:
      return null
  }
  return (
    <div className="modal-background" >
      <button className='x-button' onClick={closeModal}>X</button>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
