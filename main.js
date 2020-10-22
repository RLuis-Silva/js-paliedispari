console.log("js funziona!");
var rispostaGiocatore;
var numeroValido = false;

rispostaGiocatore = prompt("inserisci 'pari' o 'dispari: ").trim(); 

var numGiocatore = parseInt(prompt("inserisci un numero da 1 a 5: "));

if(numGiocatore >= 1 && numGiocatore <= 5){
    numeroValido = true;
    console.log("Hai inserito un numero valido!");
}else{
    do{
        numGiocatore = prompt("hai inserito un numero non valido, riprova!");
        if(numGiocatore >= 1 && numGiocatore <= 5){
            numeroValido = true;
            console.log("Ora hai inserito un numero valido!");
        }
    }while(numeroValido == false);
}