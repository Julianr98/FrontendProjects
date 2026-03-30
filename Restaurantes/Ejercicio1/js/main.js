let liCollection;
let i;
// Se crea una función en consola para mostrar el texto
function dom () {
    let msg = ("Contenido del DOM cargado.");
    console.log(msg);
    // Se colocan los OK al inicio de cada punto 
    liCollection = document.getElementsByTagName('li')
    for (i = 0; i < liCollection.length; i++){
        liCollection[i].innerHTML = '[Ok]' + liCollection[i].innerHTML;
    }
}

// Se genera el texto por carga de js y se ingresa al textarea
let mensaje;
function valor () {
    mensaje  = document.getElementById("origen");
    mensaje.innerHTML = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>'; 
    return mensaje;
}

// Se habilita el input para los botones
let btnCollection;
function inputEvent () {
    btnCollection = document.querySelectorAll('[type=button]');
    mensaje.addEventListener('input', function(){
        for (i = 0; i < btnCollection.length; i++){
            btnCollection[i].disabled = false;
        }
    });
}

// Se realiza proceso con el boton de reemplazar 
let destinyBlock;
function btnEvent (){
    destinyBlock  = document.getElementById('destino');
    btnCollection[0].addEventListener('click', function(){
        destinyBlock.innerHTML = mensaje.value;
    });
}

// Colección botones para agregar una o varias veces
let adTextBtnCollection = document.getElementsByClassName('btn-agregar');
function addTextToBlock (value1, value2){
    value1.addEventListener('click', function(){
        destinyBlock.innerHTML += mensaje.value.repeat(value2);
        destinyBlock.style.textTransform = 'inherit';
        if (value1.value === 'Agregar n veces'){
            let valorEntrada = prompt('¿Cuantas veces desea repetir?')
            if (valorEntrada.match(/^\d+$/)){
                destinyBlock.innerHTML += mensaje.value.repeat(valorEntrada);
            }else {
                console.error('Ha ingresado un valor errónea')
                alert('Ha ingresado un valor erróneo');
            }
        } 
    })  
}

// botón para vaciar
let clear;
function cleanBox(){
    btnCollection[5].addEventListener('click', function (){
        if (destinyBlock.innerHTML){
            destinyBlock.innerHTML = '';
        }else {
            console.error('No hay contenido');
            alert('No hay contenido');
        }
    })
}

// Convertir en MAYUSCULA
function convertUppercase (){
    btnCollection[6].addEventListener('click', function(){
        destinyBlock.style.textTransform = 'uppercase'
    })
}

// Convertir en minuscula
function convertLowercase (){
    btnCollection[7].addEventListener('click', function(){
        destinyBlock.style.textTransform = 'lowercase'
    })
}

 

// con el detector de eventos controlo que ejecute la función del dom cuando el documento se esta cargando y se ejecutan todas las funciones
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", dom);
    document.addEventListener("DOMContentLoaded", valor);
    document.addEventListener("DOMContentLoaded", inputEvent);  
    document.addEventListener("DOMContentLoaded", btnEvent); 
    document.addEventListener("DOMContentLoaded", addTextToBlock) 
    document.addEventListener("DOMContentLoaded", cleanBox)
    document.addEventListener("DOMContentLoaded", convertUppercase)
    document.addEventListener("DOMContentLoaded", convertLowercase)
// de lo contrario si el documento no tiene demoras este ejecutara el dom automáticamente.
}else {
   dom(); 
   valor();
   inputEvent();
   btnEvent();
   addTextToBlock();
   cleanBox();
   convertUppercase();
   convertLowercase();
}













