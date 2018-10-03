import SongList from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSongs } from '../../actions/songActions'
import { addSongToLibrary } from '../../actions/userActions'

const mapStateToProps = state => {
  return {
    token: state.token.token ? state.token.token : '',
    songs: state.songs.songs ? state.songs.songs : '',
    fetchSongsError: state.songs.fetchSongsError,
    fetchSongsPending: state.songs.fetchSongsPending,
    fetchPlaylistSongsPending: state.songs.fetchPlaylistSongsPending,
    songPlaying: state.songs.songPlaying,
    songPaused: state.songs.songPaused,
    songId: state.songs.songId,
    songAddedId: state.user.songId || '',
    viewType: state.songs.viewType
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSongs,
      addSongToLibrary
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(SongList)
