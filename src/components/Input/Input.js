import {React, useState} from 'react'
import './Input.css';

function Input({htmlFor, type, name, content, noChange}) {
    return (
        <>
           <label htmlFor={htmlFor} className="labelInput">{content}</label> 
           <input type={type} name={name} onChange={noChange} className="input"></input>
        </>
    )
}

export default Input