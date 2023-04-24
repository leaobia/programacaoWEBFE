'use strict'

/*Se você quiser adicionar um elemento no final do seu array, 
use o método push() .
Se você precisar adicionar um elemento no início do seu array, 
use o método unshift() .
Se você precisar remover um elemento no início do seu array, 
use o método pop() .
Se você deseja adicionar um elemento em uma posição específica do seu array, 
use o método splice() .*/

import { produtos } from "./produtos.js"
import "./cards.js"

const criaCard = (produto) => {

    const card = document.createElement('card-bibi')
    card.foto = produto.image
    card.name = produto.name
    card.description = produto.description
    card.price = produto.price
    console.log(card)

}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criaCard)
    container.replaceChildren(...cards)
}

carregarProdutos()
