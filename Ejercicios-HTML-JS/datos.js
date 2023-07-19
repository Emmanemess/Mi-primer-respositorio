function Mostrar(){
    let Nombre1 = (document.getElementById('Nombre1'))
    let Nombre2 = (document.getElementById('Nombre2'))
    let Apellido1 = (document.getElementById('Apellido1'))
    let Apellido2 = (document.getElementById('Apellido2'))
    let edad = (document.getElementById('edad'))

    //Mostrar los datos

    document.getElementById('Mostrar').textContent = 'Se llama:' + Nombre1, + Nombre2, + Apellido1, + Apellido2, 'Y tiene ' + edad, 'años';
}
