import React, { useState } from 'react'
import Square from './Square.jsx'


function Board() {

    return (
        <>
            <div className="board-row">
                <Square></Square>
                <Square ></Square>
                <Square ></Square>
            </div >
            <div className="board-row">
                <Square></Square>
                <Square ></Square>
                <Square ></Square>

            </div>
            <div className="board-row">
                <Square></Square>
                <Square ></Square>
                <Square ></Square>
            </div>
        </>
    )
}

export default Board