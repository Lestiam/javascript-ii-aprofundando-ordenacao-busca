const { edGalho, edFolha } = require('./arrays');

function juntaListas(lista1, lista2) {
    let listaFinal = [];
    let posicaoAtualLista1 = 0; //o 0 se refere o indice do array que a lista está
    let posicaoAtualLista2 = 0;
    let atual = 0;

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) { //percorre o loop enquanto a posição atual da lista 1 for menor que o tamanho da lista 1 e a posição atual da lista 2 for menor que o tamanho da lista 2
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];
        console.log(`comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}`);

        if (produtoAtualLista1.preco < produtoAtualLista2.preco) { //se o preço do produto da lista 1 for menor que o preço do produto da lista 2, o produto da lista 1 é inserido na lista final
            listaFinal[atual] = produtoAtualLista1 //o atual se refere ao indice do array que a lista está
            posicaoAtualLista1++;
        } else {
            listaFinal[atual] = produtoAtualLista2
            posicaoAtualLista2++;
        }

        atual++; //depois que definirmos o valor da lista final, incrementamos o atual para que o próximo valor seja inserido na próxima posição
    }

    //ele só vai entrar na condição de um desses while de baixo, após terminar o primeiro while

    while (posicaoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista1]; //se a posição atual da lista 1 for menor que o tamanho da lista 1, o produto da lista 1 é inserido na lista final
        posicaoAtualLista1++; //incrementa a posição atual da lista 1
        atual++; //incrementa o atual para que o próximo valor seja inserido na próxima posição
    }

    while (posicaoAtualLista2 < lista2.length) {
        listaFinal[atual] = lista2[posicaoAtualLista2]; //se a posição atual da lista 2 for menor que o tamanho da lista 2, o produto da lista 2 é inserido na lista final
        posicaoAtualLista2++; //incrementa a posição atual da lista 2
        atual++; //incrementa o atual para que o próximo valor seja inserido na próxima posição
    }

    return listaFinal;
}

console.log(juntaListas(edGalho, edFolha)); //aqui chamamos a função juntaListas e passamos como parâmetro as listas edGalho e edFolha