// Helpers
function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica2(lista) {
    const sumLista = lista.reduce (
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumLista / lista.length;

    return promedioLista;
}


// Calculadora de medianas

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    console.log(mitad);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica2([personaMitad1, personaMitad2]);

        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


// Mediana General
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted)

// Mediana del top 10%
const sliceStart = parseInt((salariosColSorted.length * 90) / 100);    //parseInt, para cuando sea impar la lista, pueda funcionar
const sliceCount = salariosColSorted.length;



const salariosColTop10 = salariosColSorted.slice(
    sliceStart,
    sliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
})