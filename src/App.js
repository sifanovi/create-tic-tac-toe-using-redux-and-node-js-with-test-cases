import React from 'react';
import "./App.css"

import Board from './components/Board/Board.js'

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-md-6 offset-md-3">
                    <Board/>
                </div>
            </div>
        </div>
    );
}

export default App;
