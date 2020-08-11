import React from 'react';
import "./App.css"

import Board from './components/Board/Board.js'
import Logs from "./components/Board/Square/logs";

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-md-4 ">
                    <Board/>
                </div>
                 <div className="mt-4 col col-md-4 offset-md-2">
                  <Logs/>
                </div>
            </div>
        </div>
    );
}

export default App;
