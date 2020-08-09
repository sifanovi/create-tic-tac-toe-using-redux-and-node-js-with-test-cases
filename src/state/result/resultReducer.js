import {X_WINS, O_WINS, TIE, RESET_RESULT} from './actionTypes';

export const initialResult = {
    win: null,
    tie: false
}

export function resultReducer(state = initialResult, action) {
    switch (action.type) {
        case X_WINS:
            return {
                win: 'X',
                tie: false
            }

        case O_WINS:
            return {
                win: 'O',
                tie: false
            }

        case TIE:

            return {
                win: null,
                tie: true
            }
        case RESET_RESULT:
            return action.value

        default:
            return state;
    }
}
