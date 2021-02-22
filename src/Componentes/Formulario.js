import React, { Component } from 'react'

export default class Formulario extends Component {
    render() {
        return (
            <div className='paginaContato'>
                <h1 className="tituloContato">Contato</h1>
      
                <form className="form">
                    <label className="label" htmlFor="">Nome</label>
                    <input className="input" type="text" name="" id=""/>
                    <label className="label" htmlFor="">Email</label>
                    <input className="input" type="text" name="" id=""/>
                    <label className="label" htmlFor="">Mensagem</label>
                    <textarea className="input" name="mensagem" />
                    <button className="button" type="">Enviar</button>
                </form>
            </div>
        )
    }
}
