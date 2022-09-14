function calcular(num1, num2){
   return num1 + num2 
}

console.log(calcular(1,2));


function calcul(num1, num2){
return num1 >= num2
}

console.log(calcul(2,3))


function numeropar(num1){
    let valor = (0)
    if(num1 % 2 === 0){
    valor = ("O numero é par!")
    }
    else(valor = (`O numero é ímpar!`))
    return valor
    } 
    
console.log(numeropar(2))


function letra(palavra){
    console.log(palavra.length)
    console.log(palavra.toUpperCase())
}
letra("Bruno")



