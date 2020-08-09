import {
    DRAW_X,
    DRAW_O,
    RESUME_FROM_LAST,
    PLAY_AGAIN
} from '../board/actionTypes'

import {RESUME_PLAYER_SETTING} from "../player/actionTypes";
import apiService from '../../helpers/api.service'

import {playerSettings} from "../player/playerReducer";
import {initialResult} from "../result/resultReducer";
import {RESET_RESULT} from "../result/actionTypes";

export function drawXAction(cellIndex, board) {
    return (dispatch) => {
        return new Promise(resolve => {

            const payload = board;
            payload[cellIndex] = 'X'
            apiService.post('/sessions/1', JSON.stringify({moves: payload})).then(function (result) {
                dispatch({
                    type: DRAW_X,
                    cellIndex
                })
                resolve()
            }).catch(function (err) {
                console.log(err)
            })

        })
    }
}
export function drawOAction(cellIndex, board) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const payload = board;
            payload[cellIndex] = 'O'
            apiService.post('/sessions/1', JSON.stringify({moves: payload})).then(function (result) {
                dispatch({
                    type: DRAW_O,
                    cellIndex
                })
            }).catch(function (err) {
                reject()
                console.log(err)
            })
            resolve()
        })
    }
}
export function playAgain() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            apiService.post('/sessions/playagain/1', JSON.stringify({...playerSettings})).then((result) => {
                dispatch({
                    type: PLAY_AGAIN,
                    value: result.data.moves
                });
                dispatch({
                    type: RESUME_PLAYER_SETTING,
                    value: playerSettings
                });
                dispatch({
                    type: RESET_RESULT,
                    value: initialResult
                });
            }).catch(function (err) {
                reject()
                console.log(err)
            })
            resolve()
        })
    }
}

export function getlastSave() {
    return dispatch => {
        apiService.get('sessions/1/').then(result => {

            if (result.data.moves !== null) {
                dispatch({
                    type: RESUME_FROM_LAST,
                    value: JSON.parse(result.data.moves)
                });

            }
        }).catch(err => {
            console.log(err)
        })
    }
}

