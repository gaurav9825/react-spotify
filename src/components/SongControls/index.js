import SongControls from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseSongTime } from '../../actions/songActions'

const mapStateToProps = state => {
  return {
    songName: state.songs.songDetails ? state.songs.songDetails.name : '',
    artistName: state.songs.songDetails
      ? state.songs.songDetails.artists[0].name
      : '',
    songPlaying: state.songs.songPlaying,
    timeElapsed: state.songs.timeElapsed,
    songPaused: state.songs.songPaused,
    songDetails: state.songs.songDetails,
    songs: state.songs.songs,
    albumImage: state.songs.songDetails
      ? state.songs.songDetails.album.images[0].url
      : ''
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increaseSongTime
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SongControls)
