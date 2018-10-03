import UserPlaylists from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchPlaylistsMenu,
  fetchPlaylistSongs
} from '../../actions/playlistActions'
import { updateHeaderTitle } from '../../actions/uiActions'

const mapStateToProps = state => {
  return {
    userId: state.user.user ? state.user.user.id : '',
    playlistMenu: state.playlist.playlistMenu
      ? state.playlist.playlistMenu
      : '',
    token: state.token.token ? state.token.token : '',
    title: state.ui.title
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchPlaylistsMenu,
      fetchPlaylistSongs,
      updateHeaderTitle
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylists)
