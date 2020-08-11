import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'


function Logs(props) {
    const {players, board} = props


    return (

        <div style={{height: "500px", overflowY: "scroll"}}>
            <h1 className="col-12 text-center text-primary">Logs</h1>
            {

                players.logs && players.logs.map(item => <div className="btn btn-warning"
                                                              style={{display: 'box', justifyContent: 'center'}}
                                                              key={item.id}><span>  {moment(item.createdAt).format("YYYY-MM-DD hh:ss A")} </span> <span
                    className="btn btn-success">Player {item.playedBy} placed <strong>{board[item.cellIndex]} </strong> </span>
                </div>)}</div>

    )
}

const mapStateToProps = ({players, board}) => ({players, board})


export default connect(mapStateToProps)(Logs)




