import React from 'react'
import './Button.css'

function Button(props) {
    const type = props.type
    const content = props.content
    return (
        <button className="buttonContato" type={type}>{content}</button>
    )
}

export default Button
