import validator from './validator.js';
const getData = function(){
    //value:devuelve un array cuyos elementos son valores de propiedades enumarables que se encuentran en el objeto. El orden de las propiedades es el mismo que el dado cuando se recorre el objeto de forma manual.
    let cardNumber= document.getElementById("card-number").value;
    let nameOnCard= document.getElementById("name-on-card").value;
    let date= document.getElementById("date").value;
    let cvc= document.getElementById("cvc").value;

    let buttonValidar= document.getElementById("validar");
    buttonValidar.addEventListener("click", validator.isValid(cardNumber));

}
console.log(validator);
