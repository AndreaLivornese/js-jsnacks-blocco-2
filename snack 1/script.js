// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50


const array=[];

const ulElement = document.querySelector("#input");
const resultElement = document.querySelector("#somma");


let somma=0;

do{
    let liElement = document.createElement("li");

    let n = Number(prompt("inserisci un numero"));
    array.push(n);
    somma+= n;

    liElement.innerText= n;
    ulElement.append(liElement);

    console.log(somma);
}while(somma < 50);


resultElement.innerText= "La somma è di "+somma;
console.log("fuori dal while");