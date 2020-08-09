import { combineReducers } from 'redux'

import { boardReducer } from './board/boardReducer'
import { playerReducer } from './player/playerReducer'
import { resultReducer } from './result/resultReducer';

export default combineReducers({
  board: boardReducer,
  players: playerReducer,
  result: resultReducer
})
