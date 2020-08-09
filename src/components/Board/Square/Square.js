import React from 'react'
import {connect} from 'react-redux'

import PlayerOne from './PlayerOne/PlayerOne.js'
import PlayerTwo from './PlayerTwo/PlayerTwo.js'
import {drawXAction, drawOAction} from '../../../state/board/boardActions.js';
import {toggleTurnAction} from '../../../state/player/playerActions.js';
import {checkResult} from "../../../state/result/resultsAction";

function Square(props) {
    const {symbol, index, draw, players, board, toggleTurn, id} = props

    const disabled = symbol ? 'disabled' : ''

    function onClickBox(e) {

        if (board[e.target.id] === 'X' || board[e.target.id] === 'O') {
            alert("You can't revert your action");
        } else {
            draw(board, players, index).then(() => {
                toggleTurn(players);
            });
        }
        checkResult(board);
    }

    return (

        <div id={id} className={'cell ' + disabled} onClick={onClickBox}>
            { symbol === 'X' &&  <PlayerOne/>}
              {symbol === 'O' && <PlayerTwo/>}

        </div>
    )
}

const mapStateToProps = ({board, players, result}) => ({board, players, result})

const mapDispatchToProps = dispatch => ({
    draw: (board, players, cellIndex) => {
        if (!board[cellIndex]) {
            if (players[players.turn] === 'X') {
                return dispatch(drawXAction(cellIndex, board))
            } else {
                return dispatch(drawOAction(cellIndex, board))
            }
        }
    },
    toggleTurn: (players) => dispatch(toggleTurnAction(players)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Square)
