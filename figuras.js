// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado(6)

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");


function areaCuadrado(lado) {
    return lado * lado
};


//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm"
);



const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");


function perimetroTriangulo(lado1, lado2, base) {
    return (Number(lado1) + Number(lado2) + Number(base));
}

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//const diametroCirculo = radioCirculo * 2;


// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
   return diametro * PI;
}

//const perimetroCirculo = diametroCirculo * PI;


// Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

//const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + "cm^2")

console.groupEnd();



// Arrow Functions

// Cuadrado
const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;

// Triángulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura) / 2;

// Círculo
const diametroCirculo = (radio) => radio * 2;

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

const areaCirculo = (radio) => PI * (radio ** 2);





// Aquí interactuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputLadoA = document.getElementById("InputTrianguloLadoA");
    const valueLadoA = inputLadoA.value;

    const inputLadoB = document.getElementById("InputTrianguloLadoB");
    const valueLadoB = inputLadoB.value;

    const inputLadoBase = document.getElementById("InputTrianguloLadoBase");
    const valueLadoBase = inputLadoBase.value;

    const perimetro = perimetroTriangulo(valueLadoA, valueLadoB, valueLadoBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputLadoBase = document.getElementById("InputTrianguloLadoBase");
    const valueLadoBase = inputLadoBase.value;

    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueLadoBase, valueAltura);
    alert(area);
}

function calcularAlturaTrianguloIsosceles() {
    const inputLadoA = document.getElementById("InputTrianguloLadoA");
    const valueLadoA = inputLadoA.value;

    const inputLadoB = document.getElementById("InputTrianguloLadoB");
    const valueLadoB = inputLadoB.value;

    const inputLadoBase = document.getElementById("InputTrianguloLadoBase");
    const valueLadoBase = inputLadoBase.value;

    const altura = alturaTrianguloIsosceles(valueLadoA, valueLadoB, valueLadoBase);
    alert(altura);
}

function alturaTrianguloIsosceles(ladoA, ladoB, ladoBase) {
    if(ladoA != ladoB) {
        alert("No correcto");
    }else {
        const ladoBaseMitad = ladoBase / 2;

        const alturaTriangulo = Math.sqrt((ladoA ** 2) - (ladoBaseMitad ** 2));
        return alturaTriangulo;
    }
}

function calcularDiametroCirculo() {
    const inputRadio = document.getElementById("InputCirculo");
    const valueRadio = inputRadio.value;

    const diametro = diametroCirculo(valueRadio);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("InputCirculo");
    const valueRadio = inputRadio.value;

    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputCirculo");
    const valueRadio = inputRadio.value;

    const area = areaCirculo(valueRadio);
    alert(area);
}