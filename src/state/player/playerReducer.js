import {PLAYER_X, TURN, PLAYER_O,RESUME_PLAYER_SETTING} from './actionTypes'

export const playerSettings = {
    playerOne: 'X',
    playerTwo: 'O',
    turn: 'playerOne'
}
export function playerReducer(state = playerSettings, action) {
    switch (action.type) {
        case PLAYER_X:
            const newXState = {...state}

            if (action.player === 'playerOne') {
                newXState.playerOne = 'X'
                newXState.playerTwo = 'O'
            } else {
                newXState.playerOne = 'O'
                newXState.playerTwo = 'X'
            }
            return newXState

        case PLAYER_O:
            const newOState = {...state}

            if (action.player === 'playerOne') {
                newOState.playerOne = 'O'
                newOState.playerTwo = 'X'
            } else {
                newOState.playerOne = 'X'
                newOState.playerTwo = 'O'
            }
            return newOState

        case TURN:
            const newState = {...state}

            newState.turn=action.value
            return newState

        case RESUME_PLAYER_SETTING:

            return action.value

        default:
            return state
    }
}
