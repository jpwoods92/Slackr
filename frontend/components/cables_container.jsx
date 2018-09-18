import { connect } from 'react-redux'
import Cables from './cables.jsx'

const mapStateToProps = (state) => ({
  rooms: state.entities.rooms
})

export default connect(mapStateToProps)(Cables)
