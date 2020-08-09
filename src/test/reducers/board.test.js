import {boardReducer} from '../../state/board/boardReducer';
import {DRAW_X, DRAW_O, RESUME_FROM_LAST, PLAY_AGAIN} from '../../state/board/actionTypes';

const initialState = [null, null, null, null, null, null, null, null, null];

describe('Board reducer', () => {
    it('should return initial state', () => {
        expect(boardReducer(undefined, {})).toEqual(initialState)
    })
})

describe('Draw X', () => {
    const draw_x = {
        type: DRAW_X,
        cellIndex: 0
    }
    it('should draw X on the board', () => {
        expect(boardReducer(initialState, draw_x)).toEqual(['X', null, null, null, null, null, null, null, null]);
    })
})
describe('Draw O', () => {
    const draw_O = {
        type: DRAW_O,
        cellIndex: 1
    }
    it('should draw O on the board', () => {
        expect(boardReducer(['X', null, null, null, null, null, null, null, null], draw_O)).toEqual(['X', 'O', null, null, null, null, null, null, null]);
    })
})

describe('Play again', () => {
    const playAgain = {
        type: PLAY_AGAIN,
        value: initialState
    }
    it('should initialize the board again', () => {
        expect(boardReducer(['X', '0', '0', '0', '0', 'X', '0', 'X', 'X'], playAgain)).toEqual(initialState);
    })
})




