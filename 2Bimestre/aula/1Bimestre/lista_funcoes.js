// EXERCÍCIO 1 QUADRANTES
function quadrante(x,y){
    if (x > 0 &&  y > 0 ){
        return console.log("Q1")
    }
    if (x > 0 && y < 0){
        return console.log("Q4")
    }
    if (x < 0 && y < 0){
        return console.log("Q3")
    }
    if (x < 0 && y > 0){
        return console.log("Q2")
    }
    if (x == 0 && y != 0){
        return console.log("X está sobre os eixos")
    }
    if (y == 0 && x != 0){
        return console.log("Y está sobre os eixos")
    }else{
        return console.log("Origem")
    }
}
quadrante(0,0)
quadrante(4.5, -2.2)
quadrante(0.1, 0.1) 
quadrante(-2, 2)  
quadrante(-2, -2)  
quadrante(0, 5)  
quadrante(5, 0)  

// EXERCÍCIO 2
function triangulo(x,y,z){
    let lados = [x, y, z]
    lados.sort((a, b) => b - a)
    x = lados[0]
    y = lados[1]
    z = lados[2]

    x2 = Math.pow(x,2)
    y2 = Math.pow(y,2)
    z2 = Math.pow(z,2)

    if (x >= y + z){
        return console.log("NÃO FORMA TRIÂNGULO")
    }
    if (x2 == y2 + z2) {
        console.log("TRIÂNGULO RETÂNGULO");
    }
    if (x2 > y2 + z2) {
        console.log("TRIÂNGULO OBTUSÂNGULO");
    } else {
        console.log("TRIÂNGULO ACUTÂNGULO");
    }

    if (x == y && y == z) {
        console.log("TRIÂNGULO EQUILÁTERO");
    } 
    if (x == y || x == z || y == z) {
        console.log("TRIÂNGULO ISÓSCELES");
    } else {
        console.log("TRIÂNGULO ESCALENO");
    }
}
triangulo(7.0, 5.0, 7.0)
triangulo(6.0, 6.0, 10.0)
triangulo(6.0, 6.0, 6.0)
triangulo(5.0, 7.0, 2.0)
triangulo(6.0, 8.0, 10.0)

// EXERCÍCIO 3 
function novoSalario(x){
    if(x > 0 && x <= 400){
        let reajuste = x * (15/100)
        let salarioNovo = x + reajuste
        return console.log("Novo salário: R$ " + salarioNovo.toFixed(2) +
        "\nReajuste ganho: R$ " + reajuste.toFixed(2) + 
        "\nEm percentual: 15 %")
    }
    if(x > 400 && x <= 800){
        let reajuste = x * (12/100)
        let salarioNovo = x + reajuste
        return console.log("Novo salário: R$ " + salarioNovo.toFixed(2) +
        "\nReajuste ganho: R$ " + reajuste.toFixed(2) + 
        "\nEm percentual: 12 %")
    }
    if(x > 800 && x <= 1200){
        let reajuste = x * (10/100)
        let salarioNovo = x + reajuste
        return console.log("Novo salário: R$ " + salarioNovo.toFixed(2) +
        "\nReajuste ganho: R$ " + reajuste.toFixed(2) + 
        "\nEm percentual: 10 %")
    }
    if(x > 1200 && x <= 2000){
        let reajuste = x * (7/100)
        let salarioNovo = x + reajuste
        return console.log("Novo salário: R$ " + salarioNovo.toFixed(2) +
        "\nReajuste ganho: R$ " + reajuste.toFixed(2) + 
        "\nEm percentual: 7 %")
    }
    else{
        let reajuste = x * (4/100)
        let salarioNovo = x + reajuste
        return console.log("Novo salário: R$ " + salarioNovo.toFixed(2) +
        "\nReajuste ganho: R$ " + reajuste.toFixed(2) + 
        "\nEm percentual: 4 %")
    }
}
novoSalario(400)
novoSalario(800.01)
novoSalario(2000)

//  EXERCÍCIO 4 
function palindromo(string){
    let reverse = string.split('').reverse().join('')
    if (reverse == string){
        console.log("PALÍNDROMO")
        return true
    }else{
        console.log("Não é um PALÍNDROMO")
        return false
    }
}
palindromo("arara")
palindromo("batata")