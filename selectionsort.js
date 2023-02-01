const livros = require('./listalivros')
const menorvalor = require('./menorvalor.js')

for ( let atual = 0; atual < livros.length ;atual++){
      let menor = menorvalor(livros,atual)

      let livroatual = livros[atual];
      console.log ('posição atual' ,atual)
      console.log('livro atual' , livros[atual])
      let livromenorpreco = livros[menor];
      console.log('livro menor preço', livros[menor])

      livros[atual] = livromenorpreco
      livros[menor] = livroatual

}

console.log(livros)