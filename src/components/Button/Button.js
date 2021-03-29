import {React, useState} from 'react'
import './Button.css'

function Button({estilo, noClick, titulo}) {

    return (
        <div>
            <button className={estilo} onClick={()=>{
                noClick()
            }}>{titulo}</button>
        </div>
    )
}

export default Button
