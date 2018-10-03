import SongControls from './component'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    albumImage: state.songs.songDetails
      ? state.songs.songDetails.album.images[0].url
      : ''
  }
}

export default connect(mapStateToProps)(SongControls)
