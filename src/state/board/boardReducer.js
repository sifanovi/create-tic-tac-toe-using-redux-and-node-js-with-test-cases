import {DRAW_X, DRAW_O, RESUME_FROM_LAST, PLAY_AGAIN} from './actionTypes'

export const initialState = [null, null, null, null, null, null, null, null, null]

export function boardReducer(state = initialState, action) {

    switch (action.type) {

        case DRAW_X:
            const newXState = [...state]
            newXState[action.cellIndex] = 'X'

            return newXState

        case DRAW_O:
            const newOState = [...state]
            newOState[action.cellIndex] = 'O'

            return newOState

        case PLAY_AGAIN:
            return action.value

        case RESUME_FROM_LAST :

            const newState = action.value

            return newState

        default:
            return state;

    }
}
