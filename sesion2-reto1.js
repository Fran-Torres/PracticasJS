var presupuesto = 2
var incremento;
const seat ={
  nombre: 'ibiza',
  color: 'rojo',
  precio: 7
}
const audi ={
  nombre: 'a3',
  color: 'blanco',
  precio: 10
}
const bmw ={
  nombre: 'bocho',
  color: 'azul',
  precio: 3
}

function incrementoSalarial(presupuesto, incremento){
  for (presupuesto, incremento; presupuesto, incremento <= 10; presupuesto, incremento++){
  if(presupuesto, incremento === 10){
    console.log("Hay con queso, compremos el audi")
  } else {
    if(presupuesto, incremento <= 7 && presupuesto, incremento >= 3 ){
      console.log("No estamos tan mal, compremos el seat")
    } else if(presupuesto, incremento <= 2) {
      console.log("Alcabo que ni quería un audi, el bocho es el mejor carro carnal")
    }
  }
}
}

function incrementoSalarialDe8 (presupuesto, incremento){
  incrementoSalarial(presupuesto, incremento = 8)
}
function incrementoSalarialDe2 (presupuesto, incremento){
  incrementoSalarial(presupuesto, incremento = 5)
}
function incrementoSalarialDe0 (presupuesto, incremento){
  incrementoSalarial(presupuesto, incremento = 0)
}

console.log('DE 8')
incrementoSalarialDe8(presupuesto)
console.log('DE 5')
incrementoSalarialDe2(presupuesto)
console.log('DE 0')
incrementoSalarialDe0(presupuesto)
