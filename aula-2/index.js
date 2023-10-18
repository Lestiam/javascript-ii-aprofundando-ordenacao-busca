const listaLivros = require('./array');

function mergeSort(array, nivelAninhamento = 0) {
    if (array.length > 1) { //se o array tiver mais de um elemento ele vai ser dividido e se não tiver, retorna o único elemento

        console.log(`Nível de aninhamento: ${nivelAninhamento}`);
        console.log(array);

        const meio = Math.floor(array.length / 2); //arredonda para baixo
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1); //slice retorna um pedaço do array e o mergeSort virou uma função recursiva, pois ela chama ela mesma
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1);
        array = ordena(parte1, parte2);
    }

    return array; 
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1]; //
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1); //o push envia o produto para a ultima posição do array
            posicaoAtualParte1++;
        } else {
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2++;
        }
    }

    return resultado.concat(posicaoAtualParte1 < parte1.length
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2)); // o concat concatena o resultado com o que sobrou do array e o slice retorna o que sobrou do array
}

console.log(mergeSort(listaLivros));