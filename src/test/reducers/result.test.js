import {resultReducer} from '../../state/result/resultReducer';
import {X_WINS, O_WINS, TIE, RESET_RESULT} from '../../state/result/actionTypes';

const initialResult = {
    win: null,
    tie: false
}

describe('Result reducer', ()=>{
    it('should return initial state',()=>{
       expect(resultReducer(undefined ,{})).toEqual(initialResult)
    })
})


