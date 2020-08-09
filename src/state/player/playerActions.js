import {PLAYER_X, TURN, PLAYER_O} from '../player/actionTypes.js'
import apiService from "../../helpers/api.service";
export function selectXPlayerAction(player) {
    return {
        type: PLAYER_X,
        player
    }
}
export function selectOPlayerAction(player) {
    return {
        type: PLAYER_O,
        player
    }
}
export function toggleTurnAction(player) {
    return (dispatch) => {
        const currentPlayer = player;
        if (currentPlayer.turn === 'playerOne') {
            currentPlayer.turn = 'playerTwo'
        } else {
            currentPlayer.turn = 'playerOne'
        }
        return new Promise(resolve => {
            apiService.post('sessions/1', JSON.stringify(currentPlayer)).then(function (result) {
                dispatch({
                    type: TURN,
                    value: currentPlayer.turn

                })
            }).catch(function (err) {
                console.log(err)
            })
            resolve()
        })
    }

}
