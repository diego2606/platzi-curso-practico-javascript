// Media Aritmética Ponderada

const notas = [
    {
        curso: "Educación Física",
        nota: 10,
        credito: 2,
    },
    {
        curso: "Programación",
        nota: 8,
        credito: 5,
    },
    {
        curso: "Finanzas personales",
        nota: 7,
        credito: 5,
    },
];

const notasConCredito = notas.map(function (notaObject) {
    return notaObject.nota * notaObject.credito;
});

console.log(notasConCredito);


const sumaDeNotasConCredito = notasConCredito.reduce(
    function (sum = 0, nuevoValor) {
        return sum + nuevoValor;
    }
)

console.log(sumaDeNotasConCredito);

const creditos = notas.map(function (notaObject) {
    return notaObject.credito;
});

const sumaDeCreditos = creditos.reduce(
    function (sum = 0, nuevoValor) {
        return sum + nuevoValor;
    }
);
console.log(sumaDeCreditos);


const promedioPonderadoNotasConCreditos = sumaDeNotasConCredito / sumaDeCreditos;

console.log(promedioPonderadoNotasConCreditos);