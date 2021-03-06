import {PLAYER_X, TURN, PLAYER_O} from '../player/actionTypes.js'
import apiService from "../../helpers/api.service";

export function selectXPlayerAction(player) {
    return {
        type: PLAYER_X,
        player
    }
}

//incase anyone wants to choose their symbol not implemented right now
export function selectOPlayerAction(player) {
    return {
        type: PLAYER_O,
        player
    }
}

//incase anyone wants to choose their symbol not implemented right now
export function toggleTurnAction(currenPlayer, board) {
    return (dispatch) => {
        if (currenPlayer.turn === 'playerOne') {
            currenPlayer.turn = 'playerTwo'
        } else {
            currenPlayer.turn = 'playerOne'
        }
        return new Promise(resolve => {
            apiService.put('games/' + localStorage.getItem('gameId'), JSON.stringify({
                turn: currenPlayer.turn,
                history: board
            })).then(function (result) {
                dispatch({
                    type: TURN,
                    value: currenPlayer.turn

                })
                resolve()
            }).catch(function (err) {
                alert("Could not toogle the turn");
                console.error(err)
            });
        });

    }

}
