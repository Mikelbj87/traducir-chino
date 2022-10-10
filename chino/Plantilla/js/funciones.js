let comentario = document.querySelector("footer > p");
      comentario.innerHTML = "<b style='color:gray'>Trabajando en chino</b>"
 
      caja.addEventListener("keyup", escribirChino,false);
 
      function escribirChino(evento){
        if ( evento.keyCode==8){return}
        if (evento.keyCode < 65 || evento.keyCode > 90){return} //solo traduce letras, menos la ñ y numeros y caracteres especiales
        let palabra=caja.value;

        palabra = palabra.toUpperCase();
        let nc=palabra.length-1;
         
        let carcodigodeletra=palabra.charCodeAt(nc);              
       
        let chino =unescape("%u"+carcodigodeletra+"e8");
        
        palabra=palabra.substring(0,nc)+chino;
        caja.value=palabra;

        //Añadir datos del caracter pulsado al div contenedor
        let datoCaracter = "<p>Tipo de evento: " + evento.type + "</p>" +
        "<p>Propiedad " + carcodigodeletra + "</p>" + 
        "<p>Caracter pulsado " +  String.fromCharCode(carcodigoletra) + "</p>"
        contenedor.innerHTML =  contenedor.innerHTML + datoCaracter;
      }
 