/*Ciclo que muestre numeros del 0 al 100*/
var i
for (i = 0; i <= 100; i++){
    if(i === 0){
        console.log('Apenas vamos calentando con FOR')
    } else {
        if(i % 2 === 0){
          console.log('El numero ' + i + 'es: par')
        } else {
            console.log('El numero ' + i + 'es: impar')
          }
    }
}
/*Mostrar si son pares o impares*/
/*Ciclo con While*/
var inc = 0
while (inc <= 100){
    if(inc === 0){
        console.log('Apenas vamos calentando con FOR')
    } else {
        if(inc % 2 === 0){
          console.log('El numero ' + inc + 'es: par')
        } else{
            console.log('El numero ' + inc + 'es: impar')
          }
    }
}