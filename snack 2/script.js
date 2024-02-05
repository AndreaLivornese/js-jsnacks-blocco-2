// Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.
// Quando l'utente trova il numero, fateglielo sapere!


const olElement= document.querySelector("#attempts");
const resultElement= document.querySelector("#result");

const cpuNumber = Math.floor(Math.random() * 100 + 1); //genera numero randomico da 1 a 100

let flag=false;
let tentativi=0;
do{
    let userNumber = Number(prompt("prova ad indovinare il numero che \"pensa\" la Pagina"));

    let liElement= document.createElement("li");

    if(userNumber == cpuNumber){
        console.log("numero indovinato");
        flag=true;
    }else if(userNumber > cpuNumber){
        liElement.innerText=userNumber;

        olElement.append(liElement);


        alert("il tuo numero è più alto");
        tentativi++;
    }else{
        liElement.innerText=userNumber;

        olElement.append(liElement);
        alert("il tuo numero è più basso");
        tentativi++;
    }
}while(!flag);

document.querySelector("#result").innerText = "Il numero scelto dalla cpu è: "+ cpuNumber + ". Hai indovinato dopo " + tentativi + " tentativi";
console.log("fuori il while");