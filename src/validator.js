const validator = {
  //1.Captura el número de la tarjeta 
  //Parametro, es lo que se necesita, se define en la funcion ej: card- , el argumento es lo que se manipula (se pasa el valor - ej: id:cardnumber)

  isValid:function(card) {
  //2.Pasar los números a un array en orden inverso.
  
  let newCard= card.split("").reverse().join("");
  /*split(), divide un objeto de tipo string en un array.- reverse(), inivierte el orden del array. - join(). une todos los elementos de un array a (string).*/
  let sumaTotal = 0;
  let sumaTotalPar = 0 ; /* es una variable que alberga número*/
  let sumaTotalImpar = 0;
  let sumaDeDigitos = 0;
  
  //3.Aplicar la operación a los números de las posiciones pares.     
  for(let i=1; i < newCard.length;i+=2){ 
    
      let numeroPar= parseInt(newCard.charAt(i))*2;
  /*recorremos el array de dos en dos i+=2, - parseInt(), convierte la cadena a un numero. - charAt()  devuelve la posicion del  String -  FOR se usa para recorrer el string y lenght hace referencia a la ongitud de la cadena newCard */

      if(numeroPar >= 10){
      let numeroParString = numeroPar.toString(); //'10'
  //toString, lo convierte a cadena 

  //4. sumar los digitos y nuevos digitos
      let num1 = parseInt(numeroParString.charAt(0)); 
      let num2 = parseInt(numeroParString.charAt(1));
      sumaDeDigitos = num1+num2;

        sumaTotalPar = sumaTotalPar + sumaDeDigitos;
       }

      else{
        sumaTotalPar = sumaTotalPar+ numeroPar;
      }
    }
    
    for(let i=0; i < newCard.length; i+=2){
      let numeroImpar = parseInt(newCard.charAt(i));
      sumaTotalImpar = sumaTotalImpar+ numeroImpar;
      
    }
      
    sumaTotal = sumaTotalImpar + sumaTotalPar;

    if (sumaTotal % 10 === 0){
      return true;
    }

    else{
      return false;
        //return devueleve el valor de la función
    } },

  //Maskify
  maskify:function(card) {
    let mascara = card.slice(0,-4).replace(/[a-zA-Z0-9]/g ,"#")+card.slice(-4);
    
     console.log (mascara);
     
    return mascara;

    //estrae un pedazo de la cadena , es negativo porq ndica el punto desde el final de la cadena.
    //replace, reemplazo dentro de una cadena */
    
  }
};

  //.slice(0,-4) -El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

  //.replace(/./g, '#') -El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo. g=global, s=una sola lines, sg singular line, 
  //+ cc.slice(-4); */

export default validator;