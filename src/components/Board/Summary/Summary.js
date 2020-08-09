import React, {Fragment, useEffect} from 'react'
import {connect} from 'react-redux'
import {checkResult} from '../../../state/result/resultsAction.js';
import {playAgain} from "../../../state/board/boardActions";
import img from '../../../assets/img/play-again-png.png'

const style = {
    width: "452px"
}


function Summary(props) {
    const {board, players, result, checkResult, playAgain} = props;


    useEffect(() => {
        if (!(result.tie || result.win)) {
            checkResult(board);
        }

    }, [board, players, result, checkResult])


    if (result.tie) {
        return <div style={style} className="alert alert-info mt-2">Sorry !! It's a Draw :(
            <button
                className="btn"
                onClick={() => playAgain()}>
                <img width="50"
                     height="50"
                     src={img}/>
            </button></div>
    } else if (result.win === 'X') {
        const player = players.playerOne === 'X' ? 'Player 1' : 'Player 2'
        return <div style={style} className="alert alert-success mt-2"> Congratulations !!! {player} Wins!
            <button className="btn" onClick={() => playAgain()}><img
                width="50"
                height="50"
                src={img}/>
            </button></div>
    } else if (result.win === 'O') {
        const player = players.playerOne === 'O' ? 'Player 1' : 'Player 2'
        return <div style={style} className="alert alert-success mt-2">Congratulations !!! {player} Wins!
            <button
                className="btn" onClick={() => playAgain()}><img
                width="50"
                height="50"
                src={img}/>
            </button></div>
    }

    return (
        <div className="mt-2 card" style={style}>
            <div className="col card-body">
                <p>
                    <strong className="mr-2">Current Turn :</strong>
                    {players.turn === 'playerOne' ? <span className="btn btn-danger">Player 1</span> :
                        <span className="btn btn-success">Player 2</span>}
                </p>
                <p><strong>Player 1</strong>: {players.playerOne}</p>
                <p><strong>Player 2</strong>: {players.playerTwo}</p>
            </div>
        </div>
    )
}

const mapStateToProps = ({players, result, board}) => ({players, result, board})

const mapDispatchToProps = (dispatch) => ({

    checkResult: (board) => dispatch(checkResult(board)),
    playAgain: () => dispatch(playAgain())

})

export default connect(mapStateToProps, mapDispatchToProps)(Summary)


