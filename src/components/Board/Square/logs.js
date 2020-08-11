import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'


function Logs(props) {
    const {players,board} = props


    return (

        <div style={{height: "500px", overflowY: "scroll"}}>
            <h1 className="col-12 btn btn-primary">Logs</h1>
            {

                players.logs && players.logs.map(item => <div style={{display:'box',justifyContent:'center'}} key={item.id}><span
                    className="btn btn-warning"> Log {item.id} </span> Player {item.playedBy} put <strong>{board[item.cellIndex]} </strong> at {moment(item.createdAt).format("YYYY-MM-DD hh:ss A")}
                </div>)}</div>

    )
}

const mapStateToProps = ({players,board}) => ({players,board})


export default connect(mapStateToProps)(Logs)




