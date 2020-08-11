import React, {Fragment, useEffect} from 'react'
import {connect} from 'react-redux'

import Summary from './Summary/Summary.js'
import Square from './Square/Square.js'
import {getlastSave} from "../../state/board/boardActions";

function Board(props) {

    useEffect(() => {
        props.getlastSave();
    },[]);


    const {board,players} = props

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

    getlastSave: () => dispatch(getlastSave())

})

export default connect(mapStateToProps, mapDispatchToProps)(Board)

