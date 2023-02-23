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


const criaCard = (produto) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const foto = document.createElement('img')
    foto.classList.add('card__image')
    foto.src = `./img/${produto.image}`

    const titulo = document.createElement('h5')
    titulo.classList.add('card__title')
    titulo.textContent = produto.name

    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    descricao.textContent = produto.description


    const price = document.createElement('span')
    price.classList.add('card__price')
    price.textContent = 'R$ ' + produto.price.toFixed(2)

    card.append(foto, titulo, descricao,price)

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criaCard)
    container.replaceChildren(...cards)
   
}

carregarProdutos()
carregarProdutos()
carregarProdutos()