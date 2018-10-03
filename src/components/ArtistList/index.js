import AlbumList from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchArtistSongs } from '../../actions/artistActions'
import { updateHeaderTitle } from '../../actions/uiActions'

const mapStateToProps = state => {
  return {
    token: state.token.token ? state.token.token : '',
    artists: state.artists.artistList ? state.artists.artistList.artists : ''
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchArtistSongs,
      updateHeaderTitle
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList)
