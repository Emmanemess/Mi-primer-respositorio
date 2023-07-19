function resta(){
    let Numero1 = parseInt(document.getElementById('Numero1').value)
    let Numero2 =  parseInt(document.getElementById('Numero2').value)
    let resta= Numero1-Numero2

    //Mostrar el resultado

    document.getElementById('resultado').textContent = 'resta es: ' + resta;}