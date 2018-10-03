import SideMenu from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchSongs,
  fetchRecentlyPlayed,
  updateViewType
} from '../../actions/songActions'
import { fetchAlbums } from '../../actions/albumActions'
import { fetchArtists } from '../../actions/artistActions'
import { fetchFeatured } from '../../actions/browseActions'
import { updateHeaderTitle } from '../../actions/uiActions'

const mapStateToProps = state => {
  return {
    userId: state.user.user ? state.user.user.id : '',
    token: state.token.token ? state.token.token : '',
    artistIds: state.artists.artistIds,
    title: state.ui.title
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchRecentlyPlayed,
      fetchSongs,
      fetchAlbums,
      fetchArtists,
      fetchFeatured,
      updateViewType,
      updateHeaderTitle
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
