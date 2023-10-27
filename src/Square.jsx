import React, { useState } from 'react'

function Square() {


    const [value, setValue] = useState('')

    function handleOnclick() {
        console.log('was clocked')
        setValue('X')

    }

    return (
        <>
            <button className="square" onClick={handleOnclick} >{value}</button >
        </>
    )
}

export default Square