// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. (Se iniziate con un array da 3 elementi e l'altro da 5, eseguite istruzioni sinchè non ne hanno entrambi 5



const olElement = document.querySelector("#array");
let liElement1 = document.createElement("li");
let liElement2 = document.createElement("li");

const array1=[2,4];

const array2=[45,78,23];


// output array pre lavorazione

liElement1.innerText =array1;
olElement.append(liElement1);


liElement2.innerText =array2;
olElement.append(liElement2);


while(array1.length < array2.length){

    let newNamber = Math.floor(Math.random() * 100 +1);

    array1.push(newNamber);

}


while(array2.length < array1.length){

    let newNamber = Math.floor(Math.random() * 100 +1);

    array2.push(newNamber);

}


const resultElement = document.querySelector("#result");

let liResultElement1 = document.createElement("li");
let liResultElement2 = document.createElement("li");


// output array post lavorazione


liResultElement1.innerText =array1;
resultElement.append(liResultElement1);


liResultElement2.innerText =array2;
resultElement.append(liResultElement2);

