import UserDetails from './component'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    displayName: state.user.user ? state.user.user.display_name : '',
    userImage: state.user.user && state.user.user.images[0]
      ? state.user.user.images[0].url
      : ''
  }
}

export default connect(mapStateToProps)(UserDetails)
