// Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.
// Quando l'utente trova il numero, fateglielo sapere!


const cpuNumber = Math.floor(Math.random() * 100 + 1); //genera numero randomico da 1 a 100

let flag=false;
let tentativi=0;
do{
    let userNumber = Number(prompt("prova ad indovinare il numero che \"pensa\" la Pagina"));

    if(userNumber == cpuNumber){
        console.log("numero indovinato");
        flag=true;
    }else if(userNumber > cpuNumber){
        console.log("il tuo numero è più alto");
        tentativi++;
    }else{
        console.log("il tuo numero è più basso");
        tentativi++;
    }
}while(!flag);


console.log("fuori il while");