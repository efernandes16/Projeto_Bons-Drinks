import React from 'react'
import imgSobreNos from './../../img/about-pic.jpg'
import './SobreNos.css'

export default function SobreNos() {
    return (
        <div className="divSobreNos">
            <h1 className="titulo">Sobre Nós</h1>
            <img className="imgSobre" alt="Imagem Sobre Nós" src={imgSobreNos} />
            <section className="textoSobre"> 
                <p>Sempre precisei de um pouco de atenção Acho que não sei quem sou Só sei do que não gosto E destes dias tão estranhos
                Fica poeira se escondendo pelos cantos Este é o nosso mundo O que é demais nunca é o bastante E a primeira vez é sempre a última chance
                Ninguém vê onde chegamos Os assassinos estão livres, nós não estamos Vamos sair mas não temos mais dinheiro Os meus amigos todos estão procurando emprego
                Voltamos a viver como há dez anos atrás E a cada hora que passa envelhecemos dez semanas Vamos lá, tudo bem eu só quero me divertir Esquecer, dessa noite ter um lugar legal pra ir
                Já entregamos o alvo e a artilharia Comparamos nossas vidas Esperamos que um dia Nossas vidas possam se encontrar
                Quando me vi tendo de viver Comigo apenas e com o mundo Você me veio como um sonho bom E me assustei
                Não sou perfeito Eu não esqueço A riqueza que nós temos Ninguém consegue perceber E de pensar nisso tudo, eu, homem feito
                Tive medo e não consegui dormir Vamos sair mas não temos mais dinheiro Os meus amigos todos estão procurando emprego
                Voltamos a viver como há dez anos atrás E a cada hora que passa Envelhecemos dez semanas Vamos lá, tudo bem eu só quero me divertir
                Esquecer, dessa noite ter um lugar legal pra ir Já entregamos o alvo e a artilharia Comparamos nossas vidas
                E mesmo assim, não tenho pena de ninguém</p>
            </section>
        </div>
    )
}
