const livros = require('./listalivros')

function insertionsort(lista) {

    for (let atual = 0; atual < lista.lenght ; atual++) {
        let analise = atual;
        while (analise >0 && lista[analise].preco <lista[analise - 1].preco)  {
            let itemanalise = lista[analise];
            let itemanterior = lista[analise - 1];
   
            lista[analise] = itemanterior
            lista[analise - 1] = itemanalise

            analise--
        }

    }
    console.log(lista);
}
insertionsort(livros);