let numeros = [10, 20, 30];

1 in numeros; // true → o índice 1 existe
3 in numeros; // false → o índice 3 não existe

//EXERCÍCIO 3 
function inverterComReverse(arr){
    return arr.reverse()
}
function inverterArraySemReverse(arr){
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
const v = [1, 2, 3, 4, 5];

inverterComReverse(v);
console.log(v);  // [5, 4, 3, 2, 1]

inverterArraySemReverse(v);
console.log(v);  // [1, 2, 3, 4, 5]

// EXERCÍCIO 4 
let v1 = [10, 20, 30];
let v2 = v1.slice();

v2[0] = 5;
v2.push(40);

console.log(v1); // [10, 20, 30]
console.log(v2); // [5, 20, 30, 40]
