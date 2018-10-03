import MainHeader from './component'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  fetchCategories,
  fetchNewReleases,
  fetchFeatured
} from '../../actions/browseActions'
import { updateHeaderTitle } from '../../actions/uiActions'
import { updateViewType } from '../../actions/songActions'

const mapStateToProps = state => {
  return {
    songPaused: state.songs.songPaused,
    headerTitle: state.ui.title,
    viewType: state.songs.viewType,
    playlists: state.playlist.playlists,
    artists: state.artists.artistList ? state.artists.artistList.artists : [],
    token: state.token.token
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchCategories,
      fetchNewReleases,
      updateHeaderTitle,
      updateViewType,
      fetchFeatured
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader)
