// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
let input;

do{
input = Number(prompt("inserisci un numero positivo (se inserisci un numero negativo esci dal programma)"));

if(input % 2 == 0){
    console.log(input);
}else{
    console.log(input + 1);
}

}while(input >= 0);


