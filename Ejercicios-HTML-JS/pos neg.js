function posneg(){
    let Numero = parseInt(document.getElementById('Numero').value)
if (Numero<0){
    document.getElementById('resultado').textContent = 'El numero es negativo'
} if (Numero>0){
    document.getElementById('resultado').textContent = 'El numero es positivo'
}
    //Mostrar el resultado
}