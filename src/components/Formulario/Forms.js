import React, { useState }from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Forms.css'

function Forms({}) {
    
    const [digito, setDigito] = useState("")

    const buscaSimultaneo = event => {
        setDigito(event.target.value)
        console.log(digito)
    }

    return (
        <form className="form">
            <Input content="Nome:" type="text" htmlFor="nome" name="CampoNome"/>
            <Input content="E-mail:" type="text" htmlFor="e-mail" name="CampoEmail"/>
            <Button type="submit" content="Enviar!"/>
            
            <input type="text" value={digito} onChange={buscaSimultaneo}></input>
            <p>{digito}</p>
        </form>
    )
}

export default Forms