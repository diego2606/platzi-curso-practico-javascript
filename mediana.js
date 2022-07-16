function calcularMediana(lista) {

    //En la variable lista1 está la lista que se ingresó como
    //argumento pero ordenada ascendentemente.
    const lista1 = lista.sort(function(primerElemento, segundoElemento) {
        return primerElemento - segundoElemento;
    });

    //Variable que almacena el índice que se encuentra a la mita de la lista.
    const mitadLista1 = parseInt(lista1.length / 2);

    //Variable que almacena el valor de la mediana.
    let mediana;

    //Verificar si la lista tiene n elementos par o impar.
    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1];
        const elemento2 = lista1[mitadLista1 - 1];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemento1y2;
    } else {
        mediana = lista1[mitadLista1];
    }

    return mediana;

}

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}







function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}



// const lista1 = [
//     100,
//     200,
//     300,
//     40000000
// ];

// const mitadLista1 = parseInt(lista1.length / 2);



// console.log(parseInt(2.75))


// let mediana;

// if(esPar(lista1.length)) {
//     const elemento1 = lista1[mitadLista1];
//     const elemento2 = lista1[mitadLista1 - 1];

//     const promedioElemento1y2 = calcularMediaAritmetica([
//         elemento1,
//         elemento2,
//     ]);

//     mediana = promedioElemento1y2;
// }else {
//     mediana = lista1[mitadLista1];
// }