// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const resultElement= document.querySelector("#result");

let input;

do{
input = Number(prompt("inserisci un numero positivo (se inserisci un numero negativo esci dal programma)"));
let liElement = document.createElement("li");

if(input % 2 == 0){
    console.log(input);
    liElement.innerText=input;
    resultElement.append(liElement);
}else{
    console.log(input + 1);
    liElement.innerText=input+1;
    resultElement.append(liElement);
}

}while(input >= 0);


