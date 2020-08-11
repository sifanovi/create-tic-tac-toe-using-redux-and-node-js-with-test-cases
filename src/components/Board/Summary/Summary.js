import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {checkResult} from '../../../state/result/resultsAction.js';
import {getlastSaveOrStartNew} from "../../../state/board/boardActions";
import actionImage from '../../../assets/img/play-again-png.png'

const style = {
    width: "452px"
}
const imgWidth = {
    height: 50,
    width: 50

}

function Summary(props) {
    const {board, players, result, checkResult, playAgain} = props;


    useEffect(() => {
        if (!(result.tie || result.win)) {
            checkResult(board);
        }

    }, [board,checkResult,result])

    function reinitialize() {
        localStorage.removeItem('gameId');
        localStorage.removeItem('player');
        playAgain()
    }

    if (result.tie) {
        return <div style={style} className="alert alert-info mt-2">Sorry !! It's a Draw :(
            <button
                className="btn"
                onClick={() => reinitialize()}>
                <img style={imgWidth}
                     src={actionImage}/>
            </button></div>
    } else if (result.win === 'X') {
        const player = players.playerOne === 'X' ? 'Player 1' : 'Player 2'
        return <div style={style} className="alert alert-success mt-2"> Congratulations !!! {player} Wins!
            <button className="btn" onClick={() => reinitialize()}><img
                style={imgWidth}
                src={actionImage}/>
            </button></div>
    } else if (result.win === 'O') {
        const player = players.playerOne === 'O' ? 'Player 1' : 'Player 2'
        return <div style={style} className="alert alert-success mt-2">Congratulations !!! {player} Wins!
            <button
                className="btn" onClick={() => reinitialize()}><img
                style={imgWidth}
                src={actionImage}/>
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
                <p><strong>Player 1 ID</strong>: {players.playerOneId}</p>
                <p><strong>Player 1 Symbol</strong>: {players.playerOne}</p>
                <p><strong>Player 2 ID</strong>: {players.playerTwoId}</p>
                <p><strong>Player 2 Symbol</strong>: {players.playerTwo}</p>
            </div>
        </div>
    )
}

const mapStateToProps = ({players, result, board}) => ({players, result, board})

const mapDispatchToProps = (dispatch) => ({

    checkResult: (board) => dispatch(checkResult(board)),
    playAgain: () => dispatch(getlastSaveOrStartNew())

})

export default connect(mapStateToProps, mapDispatchToProps)(Summary)


