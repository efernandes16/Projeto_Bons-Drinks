import React from 'react'

function Input({htmlFor, type, name, content}) {
    return (
        <>
           <label htmlFor={htmlFor}>{content}</label> 
           <input type={type} id={htmlFor} name={name} ></input>
        </>
    )
}

export default Input