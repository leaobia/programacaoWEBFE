'use strict'

 class cards extends HTMLElement {
    constructor() {

        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.nome = 'Nome do Aluno'
        this.foto = null
        this.cor = '#00587A';
        this.turma = 'Turma'

    }

    static get observedAttributes(){
        return ['nome', 'foto', 'cor', 'turma']
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
            width: 250px;
            height: 350px;
            display: grid;
            place-items: center;
            grid-template-rows: 20% 60% 20%;
            background-color: ${this.cor} ;
            cursor:pointer;
            transition: .3s ease-in-out;
            padding-top:4%;
        }

        .card:hover{
            scale: 0.9;
        }

        .card__text{
            color: #FFF;
            font-size: clamp(1.5rem, 0.286rem + 2.238vw, 2.2rem);
            text-align:center;
        }

        .card__img{
            background: url(${this.foto});
            height: 150px;
            width:150px;
            border-radius:50%;
            background-size: cover;
            background-position: center;
        }
        
        `

        return css;
    }

    component() {

        const card = document.createElement('div')
        card.classList.add('card')

        const nomeAluno = document.createElement('div')
        nomeAluno.classList.add('card__text')
        nomeAluno.textContent = this.nome

        const imgAluno = document.createElement('div')
        imgAluno.classList.add('card__img')

        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = this.turma



        card.append(nomeAluno, imgAluno, turma)
        return card
    }

}

// isso cria a propia tag chamada card-bibi
customElements.define('card-bibi', cards)