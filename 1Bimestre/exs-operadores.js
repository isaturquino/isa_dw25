// EXERCÍCIO 4 
let str = "Banana";
str[2] = "t"; // Tentando modificar o primeiro caractere
console.log(str); // "Banana" (não muda!) 

//EXERCÍCIO 5 
let conta = 15 + 3 * 5
console.log(conta) // Resultado: "30"

let resultado = 100 / 5 / 2;
console.log(resultado); // 10 (porque / a associatividade é da E p/ D)

//Exercício 6 
let a = 10, b = 20;
let maior = (a > b) ? a : b;
console.log(maior); // 20

//Exercício 7
function parOuImpar(numero) {
    console.log("Esse número é ímpar ou par?")
    if (numero % 2 === 0) {  
        console.log("par");
    } else {
        console.log("ímpar"); }
} 
parOuImpar(9);// 'ímpar'
parOuImpar(8);// 'par'7

//EXERCÍCIO 8 
function ePrimo(x) {
    if (x < 2) return console.log("Não é primo"); 

    for (let i = 2; i * i <= x; i++) { 
        if (x % i == 0) { 
            return console.log("Não é primo");
        }
    }

    console.log("É PRIMO!");
}
ePrimo(11); // "É PRIMO!"
ePrimo(6);  // "Não é primo"
ePrimo(2);  // "É PRIMO!"

//EXERCÍCIO 9
function CelParaFah(c){
    let fahrenheit = c * 1.8 + 32
    return console.log(fahrenheit.toFixed(1))
}
CelParaFah(30)
CelParaFah(21)

//EXERCÍCIO 10

//EXERCÍCIO 11 
function transformaSeg(segundos) {
    let horas = Math.round(segundos / 3600);
    let minutos = Math.round((segundos % 3600) / 60);
    let segs = segundos % 60;
    
    console.log(horas + ":" + minutos + ":" + segs);
}
transformaSeg(4508)
transformaSeg(3600)
transformaSeg(78568)

