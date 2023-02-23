'use strict'

/*Se você quiser adicionar um elemento no final do seu array, 
use o método push() .
Se você precisar adicionar um elemento no início do seu array, 
use o método unshift() .
Se você precisar remover um elemento no início do seu array, 
use o método pop() .
Se você deseja adicionar um elemento em uma posição específica do seu array, 
use o método splice() .*/

const aluno = { nome:"Leonid",nota:'10',aprovado:true }
const aluno2 = ["Leonid",10,true ]

console.log(aluno.nota)
console.log(aluno2[0])

const ds2t = [
    {
        nome: 'Leonid',
        nota: '10',
        aprovado:true
    },
    {
        nome: 'Bianca',
        nota: '8',
        aprovado:true
    }
]

// JSON 

console.log(ds2t[0].nome)