import validator from './validator.js';

const final = document.getElementById("final");
const button = document.getElementById("validar");
const tarjetaPrincipal = document.getElementById("tarjetaPrincipal");

button.addEventListener("click",()=>{
    
    let cardNumber= document.getElementById("cardNumber").value;

    let nameCard = document.getElementById("nameCard").value;


    const validador=validator.isValid(cardNumber);

    const cardCorrect= document.getElementById("cardCorrect"); 

    const user = document.getElementById("user");

    if (validador === true && cardNumber !==""){
        
        user.innerHTML= nameCard  + "  " + "bienvenido a nuestra comunidad de fans."

        tarjetaPrincipal.classList.replace("mostrar","ocultar");
        final.classList.replace("ocultar","mostrar");
    }

    else if(cardNumber ===""){
        alert("Ingrese el número de la tarjeta");
    }

    else {
        alert("el número de su tarjeta no es válida");
    }

    cardCorrect.value = validator.maskify(cardNumber);
});
