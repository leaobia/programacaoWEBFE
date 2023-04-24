'use strict'

const calcular = document.getElementById('calcular')

calcular.addEventListener('click', somar)

/*function somar() {
    const numero1 = document.getElementById('numero1').value
    const numero2 = document.getElementById('numero2').value
    const formulario = document.getElementById('formulario')
     const resultado = Number(numero1) + Number(numero2)/2
    document.getElementById('resultado1').value = Number(numero1) + Number(numero2)

    formulario.classList.add('sombra-vermelha')
}*/
const nota1 = document.getElementById('nota1').value
const nota2 = document.getElementById('nota2').value
const teste = document.getElementById('teste')

function somar(){
    const nota1 = document.getElementById('nota1').value
    const nota2 = document.getElementById('nota2').value

    const resultado = (Number(nota1) + Number(nota2)) / 2

    document.getElementById('situacao').value = resultado

    console.log(resultado)

    if(resultado >= 5){
        document.getElementById('situacao').value = 'Aprovado!'
        this.classList.toggle('aprovado')
        formulario.classList.toggle('aprovado')
        formulario.classList.remove('reprovado')
    }else{
        document.getElementById('situacao').value = 'Repetiu!'
        this.classList.toggle('reprovado')
        formulario.classList.toggle('reprovado')
        formulario.classList.remove('aprovado')
    }
    
}



