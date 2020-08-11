import React, {Fragment, useEffect} from 'react'
import {connect} from 'react-redux'

import Summary from './Summary/Summary.js'
import Square from './Square/Square.js'
import {getlastSaveOrStartNew} from "../../state/board/boardActions";

function Board(props) {

    const {board,players,getlastSaveOrStartNew} = props
    useEffect(() => {
        getlastSaveOrStartNew();
    },[]);

    return (
        <Fragment>
            <div id="board" className="mt-4 d-flex flex-wrap">
                {
                    board.map((symbol, i) => <Square key={i} index={i} id={i} symbol={symbol}/>)
                }
            </div>

            <Summary players={players} />

        </Fragment>
    )
}

const mapStateToProps = ({board,players}) => ({board,players})

const mapDispatchToProps = dispatch => ({

    getlastSaveOrStartNew: () => dispatch(getlastSaveOrStartNew())

})

export default connect(mapStateToProps, mapDispatchToProps)(Board)

