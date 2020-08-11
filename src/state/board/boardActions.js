import {
    DRAW_X,
    DRAW_O,
    RESUME_FROM_LAST,
} from '../board/actionTypes'


import {INITIALIZE_PLAYER_SETTINGS, RESUME_PLAYER_SETTING, ADD_LOGS} from "../player/actionTypes";
import apiService from '../../helpers/api.service'
import {RESET_RESULT} from "../result/actionTypes";

export function drawXAction(cellIndex, board, player) {
    return (dispatch) => {
        return new Promise(resolve => {

            board[cellIndex] = 'X';
            const payload = {};
            payload['cellIndex'] = cellIndex;
            payload['history'] = board;
            payload['playedBy'] = player;
            payload['gameId'] = localStorage.getItem('gameId');

            apiService.post('/actions/', JSON.stringify(payload)).then(function (result) {
                dispatch({
                    type: DRAW_X,
                    cellIndex
                });
                dispatch({
                    type: ADD_LOGS,
                    value: result.data

                })
                resolve()
            }).catch(function (err) {
                alert("Could not save your action please reload the page");
                console.log(err)
            })

        })
    }
}

export function drawOAction(cellIndex, board, player) {
    return (dispatch) => {
        return new Promise(resolve => {
            const payload = {};
            board[cellIndex] = 'O'
            payload['cellIndex'] = cellIndex;
            payload['playedBy'] = player;
            payload['history'] = board;
            payload['gameId'] = localStorage.getItem('gameId');

            apiService.post('/actions/', JSON.stringify(payload)).then(function (result) {
                dispatch({
                    type: DRAW_O,
                    cellIndex
                });
                dispatch({
                    type: ADD_LOGS,
                    value: result.data

                })
                resolve()
            }).catch(function (err) {
                alert("Could not save your action please reload the page");
                console.error(err)
            })
        })
    }
}

export function getlastSaveOrStartNew() {
    return dispatch => {
        return new Promise(resolve => {
            if (localStorage.getItem('gameId')) {

                apiService.get('games/' + localStorage.getItem('gameId')).then(response => {
                    const result = response.data;
                    const playerSetting = JSON.parse(localStorage.getItem('player'))
                    playerSetting.turn = result.turn
                    playerSetting.logs = result.logs
                    dispatch({
                        type: RESUME_FROM_LAST,
                        value: result.moves
                    });
                    dispatch({
                        type: RESUME_PLAYER_SETTING,
                        value: playerSetting
                    });
                    resolve()
                }).catch(err => {
                    alert("Could not save your action")
                    console.error(err)
                })

            } else {
                apiService.post('games/').then(response => {

                    const result = response.data

                    localStorage.setItem('gameId', result.id);
                    result.player.logs = [];
                    localStorage.setItem('player', JSON.stringify(result.player));


                    dispatch({
                        type: RESUME_FROM_LAST,
                        value: result.moves
                    });
                    dispatch({
                        type: INITIALIZE_PLAYER_SETTINGS,
                        value: result.player
                    });
                    dispatch({
                        type: RESET_RESULT,
                        value: result.result
                    });
                    resolve()
                }).catch(err => {
                    alert("Could not create game")
                    console.error(err)
                })
            }
            ;
        });
    }
}

