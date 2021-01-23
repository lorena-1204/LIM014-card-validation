import validator from './validator.js';

const final = document.getElementById("final");
const button = document.getElementById("validar");
const tarjetaPrincipal = document.getElementById("tarjetaPrincipal");




button.addEventListener("click",()=>{
    
    let cardNumber= document.getElementById("cardNumber").value;

    let validador=validator.isValid(cardNumber);

    //let nameCard= document.getElementById("nameCard").value; 

    if (validador === true && cardNumber !==""){
        tarjetaPrincipal.classList.replace("mostrar","ocultar");
        final.classList.replace("ocultar","mostrar");
    }
    else if(cardNumber ===""){
        alert("Ingrese el número de la tarjeta");
    }
    else {
        alert("el número de su tarjeta no es válida");
    }
    let cardCorrect= document.getElementById("cardCorrect"); 

    cardCorrect.value = validator.maskify(cardNumber);
});
