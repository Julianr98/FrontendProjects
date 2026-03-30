//  Ejercicio 6 code
console.log(document.title + '\n--------------------------------------');

document.addEventListener('DOMContentLoaded', function(){
//Punto 7 //

var liCollection = document.getElementsByTagName('li');

for (i = 0; i < liCollection.length; i++){
    liCollection[i].innerHTML = '[Ok]' + liCollection[i].innerHTML;
}
var msg = ("Contenido del DOM cargado.");
console.log(msg);

//Punto 3//            

var mensaje = document.getElementById("origen");
mensaje.innerHTML = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>'; 


//Punto 4//

var btnCollection = document.querySelectorAll('[type=button]');

mensaje.addEventListener('input', function(){
    for (i = 0; i < btnCollection.length; i++){
        btnCollection[i].disabled = false;

        }
});

//Punto 5//

var destinyBlock = document.getElementById('destino');

var adTextBtnCollection = document.getElementsByClassName('btn-agregar');

//Punto 6//

btnCollection[0].addEventListener('click', function(){
    destinyBlock.innerHTML = mensaje.value;
    destinyBlock.style.textTransform = 'inherit';
});

function addTextToBlock (value1, value2){
    value1.addEventListener('click', function(){
        destinyBlock.innerHTML += mensaje.value.repeat(value2);
        destinyBlock.style.textTransform = 'inherit';
        if(value1.value === 'Agregar n veces'){
            var valorEntrada = prompt('¿Cuantas veces desea repetir el texto?');

            if(valorEntrada.match(/^\d+$/)){
                destinyBlock.innerHTML += mensaje.value.repeat(valorEntrada);
            } else {
                console.error('Ha ingresado un valor erróneo');
                alert('Ha ingresado un valor erróneo');
            }
        }
    });
}

addTextToBlock(adTextBtnCollection[0],1);
addTextToBlock(adTextBtnCollection[1],5);
addTextToBlock(adTextBtnCollection[2],10);
addTextToBlock(adTextBtnCollection[3]);


btnCollection[5].addEventListener('click', function(){
    if(destinyBlock.innerHTML){
        destinyBlock.innerHTML = '';
    } else {
        console.error('No hay contenido');
        alert('No hay contenido');
    }
});

btnCollection[6].addEventListener('click', function(){
    destinyBlock.style.textTransform = 'uppercase';
});

btnCollection[7].addEventListener('click', function(){
    destinyBlock.style.textTransform = 'lowercase';
});





});