import { combineReducers } from 'redux'
import user from './user'
import token from './token'
import playlist from './playlist'
import songs from './songs'
import albums from './albums'
import artists from './artists'
import ui from './ui'
import browse from './browse'
import sound from './sound'

export default combineReducers({
  user,
  token,
  playlist,
  songs,
  albums,
  artists,
  ui,
  browse,
  sound
})
