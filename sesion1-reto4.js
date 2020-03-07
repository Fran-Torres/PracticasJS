function contar(numeroMaximo){
    var i
    for (i = 0; i <= numeroMaximo; i++) {
        console.log('El número es: ' + i)
    }
    }

contarNumeros(5)
console.log('AHORA OTROS')
document.getElementById('diez')
  .addEventListener('click', function(){
      contar(10)
  })
document.getElementById('cien')
  .addEventListener('click', function(){
    contar(100)
  })
document.getElementById('mil')
  .addEventListener('click', function(){
    contar(1000)
  })