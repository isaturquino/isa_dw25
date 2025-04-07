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
quadrante(2, -2)
quadrante(2, 2) 
quadrante(-2, 2)  
quadrante(-2, -2)  
quadrante(0, 5)  
quadrante(5, 0)  