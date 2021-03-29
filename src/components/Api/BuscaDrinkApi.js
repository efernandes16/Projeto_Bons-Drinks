import {React, useState} from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import {FetchBuscaDrinks} from '../../Model/FetchBuscaDrinks'
import './BuscaDrinkApi.css'

export default function BuscaDrinkApi() {
    const [inputUser, setInputUser] = useState("")
    const [dadosApi, setDadosApi] = useState("")

    async function busca (){
        const req = await FetchBuscaDrinks(inputUser);
        console.log(req.drinks[0]);
        setDadosApi(req.drinks[0]);
    }

    async function digitar (valor) {
        setInputUser(valor.target.value)
    }

    return (
        <div className="divBuscaDrink">
            <section className="cabecalhoDrink">
                <h1 className="tituloBuscaDrink">Drinks</h1>
                <div className="campoBuscaDrink">
                    <Input id="inputInput" noChange={digitar} />
                    <Button estilo="botao" titulo="Buscar Drinks" noClick={busca}/>
                </div>
            </section>
            <section className="conteudoDrink">
                <h1>{dadosApi.strDrink}</h1>
                <div className="divImagemDrink">
                    <img className="imagemDrink" src={dadosApi.strDrinkThumb} alt="imagemDrink"/>
                </div>
                <p>{dadosApi.strGlass}</p>
            </section>
        </div>
    )
}