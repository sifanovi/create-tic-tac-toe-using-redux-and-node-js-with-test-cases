import {playerReducer} from '../../state/player/playerReducer';
import {PLAYER_X, TURN, PLAYER_O, RESUME_PLAYER_SETTING} from '../../state/player/actionTypes'

const initialState = {
    playerOne: 'X',
    playerTwo: 'O',
    turn: 'playerOne'
}

describe('Player reducer', () => {
    it('should return initial state', () => {
        expect(playerReducer(undefined, {})).toEqual(initialState)
    })
})



