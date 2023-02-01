const livros = require('./listalivros')
const menorvalor = require('./menorvalor.js')

livros.forEach((_, indice) => {
    let menor = menorvalor(livros, indice)
   
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })
   
   console.log(livros)