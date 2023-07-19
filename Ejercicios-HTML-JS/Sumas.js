function sumar (){
    let Numero1 = parseInt(document.getElementById('Numero1').value)
    let Numero2 =  parseInt(document.getElementById('Numero2').value)
    let suma = Numero1+Numero2

    //Mostrar el resultado

    document.getElementById('resultado').textContent = 'La suma es:' + suma;
}