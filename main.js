console.log("js funziona!");
var rispostaGiocatore;
var numeroValido = false;

rispostaGiocatore = prompt("inserisci 'pari' o 'dispari: ").trim(); 

var numGiocatore = parseInt(prompt("inserisci un numero da 1 a 5: "));

if(numGiocatore >= 1 && numGiocatore <= 5){
    numeroValido = true;
    console.log("Hai inserito un numero valido!: ", numGiocatore);
}else{
    do{
        numGiocatore = parseInt(prompt("hai inserito un numero non valido, riprova!"));
        if(numGiocatore >= 1 && numGiocatore <= 5){
            numeroValido = true;
            console.log("Ora hai inserito un numero valido!: ", numGiocatore);
        }
    }while(numeroValido == false);
}


if(numeroValido){ //numeroValido == true
    //genera funziona numero random da 1 a 5
    var numeroGenerato = numeroRandom();
    console.log("il numero generato è:", numeroGenerato);
    
    // somma i due numeri
    var numeroSommato = somma(numGiocatore, numeroGenerato);
    console.log("la somma di " + numGiocatore + " + " + numeroGenerato + " = " + numeroSommato);
}


function numeroRandom(){
    return Math.floor(Math.random() * 5) + 1;
}

function somma(num1, num2){
    return num1 + num2;
}