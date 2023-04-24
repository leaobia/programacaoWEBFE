'use strict'

 export class cards extends HTMLElement {
    constructor() {

        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.nome = 'Nome do Aluno'
        this.foto = null
        this.price = '#00587A';
        this.description = 'Turma'

    }

    static get observedAttributes(){
        return ['nome', 'foto', 'price', 'description']
    }

    
    attributeChangedCallback (nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }



    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        
        *{
            margin:0;
            padding:0;
            box-sizing: border-box;
        }

        .card{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0px 0px 8px #0006;
            padding: 16px;
            cursor: pointer;
        }
        
        .card:hover{
            box-shadow: 0px 0px 8px #00F6;
        }
        
        .card__image{
            width: 200px;
            height: 200px;
            object-fit: contain;
        }
        
        .card__title{
            font-size: 1.5rem;
        }
        .card__description{
            font-size: 1rem;
        }
        .card__price{
            width: 100%;
            font-size: 1.5rem;
            font-weight: 900;
        }
        `

        return css;
    }

    component() {

        const card = document.createElement('card-bibi')
    card.classList.add('card')

        const foto = document.createElement('img')
        foto.classList.add('card__image')
        foto.src = `./img/${this.foto}`
    
        const titulo = document.createElement('h5')
        titulo.classList.add('card__title')
        titulo.textContent = this.name
    
        const descricao = document.createElement('p')
        descricao.classList.add('card__description')
        descricao.textContent = this.description
    
        const price = document.createElement('span')
        price.classList.add('card__price')
        price.textContent = 'R$ ' + this.price
    
        card.append(foto, titulo, descricao,price)
    
        return card
    }

}

// isso cria a propia tag chamada card-bibi
customElements.define('card-bibi', cards)