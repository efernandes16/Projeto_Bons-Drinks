import React, { useState }from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import imgContato from '../../img/imgContato.jpg'
import './ContatoForms.css'

function Forms() {
    
    const [inputUsuario, setInputUsuario] = useState("")
    
    const digitar = (valor) => {
        console.log(valor.target.value);
        setInputUsuario(valor.target.value)
    }

    const limpar = (event) => {
        event.preventDefault();
    }    


    return (
        <div className="cabecalhoContato">
            <h1 className="tituloForm">Contato</h1>
            <img className="imgForm" alt="imagemContato" src={imgContato}></img>
            <form className="formulario">
                <div>
                    <Input content="Nome:" htmlFor="name" noChange={digitar} tipo="text" name="name"/>
                </div>
                <div>
                    <Input content="E-mail:" htmlFor="email" noChange={digitar} tipo="text" name="email"/>
                </div>
                <div>
                    <label htmlFor="message" className="labelInput">Mensagem:</label>
                    <textarea className="textArea" onChange={digitar} name="messagem" />
                </div>
                <div>
                    <Button estilo="botao" noClick={limpar} titulo="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default Forms