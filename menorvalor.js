const livros = require('./listalivros');

function menorvalor(arrProdutos, posicaoInicial) {
let maisbarato = posicaoInicial;
 for ( let atual = posicaoInicial ; atual < arrProdutos.length ; atual ++) {
    if (arrProdutos[atual].preco < arrProdutos[maisbarato].preco) {
        maisbarato = atual
    }
}
 return maisbarato;
}

module.exports = menorvalor;


