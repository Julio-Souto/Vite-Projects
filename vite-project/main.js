import './style.css'

'use strict'

document.getElementById("b_ej1").addEventListener("click", () => {
  let perimetro = 4*Number(prompt("Lado del cuadrado",1))
  document.getElementById("r_eje1").textContent = "Perimetro del cuadrado: "+perimetro
})

document.getElementById("b_ej2").addEventListener("click", () => {
  let area = Number(prompt("Base del triangulo",1))*Number(prompt("Altura del triangulo",1))/2
  document.getElementById("r_ej2").textContent = "Area del triangulo: "+area
})

document.getElementById("b_ej3").addEventListener("click", () => {
  let suma = Number(prompt("Numero 1",1))+Number(prompt("Numero 2",1))
  let producto = Number(prompt("Numero 3",1))*Number(prompt("Numero 4",1))
  document.getElementById("r_ej3").textContent = "Suma: "+suma+"\n Producto: "+producto
})

function checkValidNum(num){
  if(num===null)
    return false
  else
    return !isNaN(num) && num.trim().length
}

document.getElementById("b_ej4").addEventListener("click", () => {
  let numbers = [];
  let suma =0;
  let producto=1;
  for(let i =0; i<4 ; i++)
    numbers[i]=prompt("Introduce un numero",1)
  
  let length=numbers.length
  let valid=true
  for(let i=0; i<length; i++){
    if(checkValidNum(numbers[i])){
      suma += Number(numbers[i])
      producto *= Number(numbers[i])
    }
    else{
      valid=false
      break
    }
  }
  if(valid)
    document.getElementById("r_ej4").textContent = "Suma: "+suma+"\n Producto: "+producto
  else
    document.getElementById("r_ej4").textContent = "Numeros no validos: "+numbers.join()
    
  // let num1 = Number(prompt("Numero 1",1))
  // let num2 = Number(prompt("Numero 2",1))
  // let num3 = Number(prompt("Numero 3",1))
  // let num4 = Number(prompt("Numero 4",1))
  // let suma=0
  // let producto=0
  // if(!isNaN(num1)&&!isNaN(num2)&&!isNaN(num3)&&!isNaN(num4)){
  //   suma = num1+num2+num3+num4
  //   producto = num1*num2*num3*num4
  //   document.getElementById("r_ej4").textContent = "Suma: "+suma+"\n Producto: "+producto
  // }
  // else
  //   document.getElementById("r_ej4").textContent = "Valores no validos: "+num1+" - "+num2+" - "+num3+" - "+num4
})

document.getElementById("b_ej5").addEventListener("click", () => {
  let numbers = [];
  let positivo = 0
  let negativo = 0
  for(let i =0; i<4 ; i++)
    numbers[i]=prompt("Introduce un numero",1)
  
  let length=numbers.length
  let valid=true
  for(let i=0; i<length; i++){
    if(checkValidNum(numbers[i])){
      if(numbers[i]>=0)
        positivo++;
      else
        negativo++;
    }
    else{
      valid=false
      break
    }
  }
  if(valid)
    document.getElementById("r_ej5").textContent = "Positivos: "+positivo+"\n Negativos: "+negativo
  else
    document.getElementById("r_ej5").textContent = "Numeros no validos: "+numbers.join()

  // let num1 = Number(prompt("Numero 1",1))
  // let num2 = Number(prompt("Numero 2",1))
  // let num3 = Number(prompt("Numero 3",1))
  // let num4 = Number(prompt("Numero 4",1))
  // if(!isNaN(num1)&&!isNaN(num2)&&!isNaN(num3)&&!isNaN(num4)){
  //   countPositivo(num1);
  //   countPositivo(num2);
  //   countPositivo(num3);
  //   countPositivo(num4);
  //   document.getElementById("r_ej5").textContent = "Positivos: "+positivo+"\n Negativos: "+negativo
  // }
  // else
  //   document.getElementById("r_ej5").textContent = "Valores no validos: "+num1+" - "+num2+" - "+num3+" - "+num4
})

function countPositivo(num){
  if(num>=0)
    positivo++;
  else
    negativo++;
}

document.getElementById("b_ej6").addEventListener("click", () => {
  let edad = prompt("Edad",1)
  if(checkValidNum(edad))
  {
    edad = Number(edad)
  if(edad>=18)
    alert("Puede conducir")
  else
    alert("No puede conducir")
  }
  else
    alert("Valor no valido: "+edad)
})

document.getElementById("b_ej7").addEventListener("click", () => {
  let nota = prompt("Nota",1)
  if(nota === null) return;
  nota = Number(nota)
  let calificacion = ""
  // if(nota>=9&&nota<=10)
  //   calificacion="Sobresaliente"
  // else if(nota<9&&nota>=7)
  //   calificacion="Notable"
  // else if(nota<7&&nota>=6)
  //   calificacion="Bien"
  // else if(nota<6&&nota>=5)
  //   calificacion="Suficiente"
  // else if(nota<5&&nota>=3)
  //   calificacion="Insuficiente"
  // else if(nota<3&&nota>=0)
  //   calificacion="Muy deficiente"
  // else
  //   calificacion="Nota no valida"

  switch(true){
    case nota>=9&&nota<=10:
      calificacion="Sobresaliente"
      break;
    case nota>=7&&nota<9:
      calificacion="Notable"
      break;
    case nota>=6&&nota<7:
      calificacion="Bien"
      break;
    case nota>=5&&nota<6:
      calificacion="Suficiente"
      break;
    case nota>=3&&nota<5:
      calificacion="Insuficiente"
      break;
    case nota>=0&&nota<3:
      calificacion="Muy deficiente"
      break;
    default:
      calificacion="Nota no valida: "+nota
      break;
  }
  document.getElementById("r_ej7").textContent = calificacion
})

