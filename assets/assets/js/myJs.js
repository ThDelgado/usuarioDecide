
let opcion = parseInt(prompt("Escribe el número de la opción que buscas: \n1.-Entradas \n2.- Plato fondo \n3.- Bebestibles  \n4.- Postres \n5.- Salir")); 
if(opcion > 5) {
    console.log('Saliste');
}else{
    while (opcion<4) {
        let opcion = parseInt(prompt("Escribe el número de la opción que buscas: \n1.-Entradas \n2.- Plato fondo \n3.- Bebestibles  \n4.- Postres \n5.- Salir"));
         if( opcion === 5) {
            break 
         }
    } 
    
  }

