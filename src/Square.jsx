import React, { useState } from 'react'

function Square({ value, onSquareClick }) {


    // const [value, setValue] = useState('')



    return (
        <>
            <button className="square" onClick={onSquareClick} >{value}</button >
        </>
    )
}

export default Square