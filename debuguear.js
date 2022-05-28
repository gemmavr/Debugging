let numero = 1;
let i = 0;
do{
    //Para el elemento i, si se cumple i====0 le da un valor de 0
    if(i===0){
        //con el simbolo "++" i en esta expresión vale 1
        i++;
        //con la función "numero--" el valor de la variable queda en 0
        numero--;
        console.log(numero);
    //si no se cumple lo snterior, la variable i se mantendrá en 1.
    }else{
        //Y el numero aumentará en uno en cada iteración
        numero++;
        console.log(numero);
    }
//se realizará este proceso hasta que el numero llegue a 5.
}while(numero<5);