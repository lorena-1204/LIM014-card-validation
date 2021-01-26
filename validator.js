const validator = {

  //1.Captura el número de la tarjeta 
  isValid:(card)=> {


  //2.Pasar los números a un array en orden inverso.
  
  let newCard= card.split("").reverse().join("");

  let sumaTotal = 0;
  let sumaTotalPar = 0 ;
  let sumaTotalImpar = 0;
  let sumaDeDigitos = 0;
  
  //3.Aplicar la operación a los números de las posiciones pares.     

  for(let i=1; i < newCard.length;i+=2){ 
    
      let numeroPar= parseInt(newCard.charAt(i))*2;

      if(numeroPar >= 10){
      let numeroParString = numeroPar.toString(); 

  //4. sumar los digitos y nuevos digitos
      let num1 = parseInt(numeroParString.charAt(0)); 
      let num2 = parseInt(numeroParString.charAt(1));
      sumaDeDigitos = num1+num2;

        sumaTotalPar = sumaTotalPar + sumaDeDigitos;
       }

      else{
        sumaTotalPar = sumaTotalPar + numeroPar;
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
    } },

  //Maskify
  maskify:(card) => {
    let mascara = card.slice(0,-4).replace(/[a-zA-Z0-9]/g ,"#")+card.slice(-4);
    
    return mascara;
  }
};

export default validator;