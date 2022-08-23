const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const boton = document.querySelector('#btn')
const pResult = document.querySelector('#result')


boton.addEventListener('click', btnclick);

function btnclick() {
    
    let transformacion = parseInt(input1.value,10);
    let transformacion2 = parseInt(input2.value,10);
    let suma = transformacion + transformacion2;
    pResult.textContent = "el resultado es " + suma;
}