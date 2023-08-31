const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ordenarPorBurbujaMejorada(arreglo) {
    const n = arreglo.length;
    let cambios;
    for (let i = 0; i < n; i++) {
        cambios = false; // Inicialmente no se han realizado cambios
        for (let j = 0; j < n - 1 - i; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                // Intercambiar elementos si el actual es mayor que el siguiente
                const temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
                cambios = true; // Se realizó un cambio en esta pasada
            }
        }
        if (!cambios) {
            // Si no se realizaron cambios en esta pasada, el arreglo está ordenado
            break;
        }
    }
}

rl.question('Introduce la longitud del arreglo: ', (longitud) => {
    const arreglo = [];

    function obtenerValor(indice) {
        if (indice < longitud) {
            rl.question(`Introduce el valor para el elemento ${indice + 1}: `, (valor) => {
                arreglo.push(parseInt(valor));
                obtenerValor(indice + 1);
            });
        } else {
            rl.close();
            ordenarPorBurbujaMejorada(arreglo);
            console.log('Arreglo ordenado:', arreglo);
            console.log('Menor número:', arreglo[0]);
        }
    }

    obtenerValor(0);
});
