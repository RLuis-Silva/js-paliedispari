console.log("js funziona!");
var rispostaGiocatore;
var numeroValido = false;
var stringValida = false;

rispostaGiocatore = prompt("inserisci 'pari' o 'dispari: ").trim(); 
if(rispostaGiocatore == "pari" || rispostaGiocatore == "dispari"){
    stringValida = true;
}else{
    do{
        rispostaGiocatore = prompt("hai inserito un valore non valido. riprova. Digita 'pari' o 'dispari': ");
        if(rispostaGiocatore == "pari" || rispostaGiocatore == "dispari"){
            stringValida = true;
        }
    }while(stringValida == false);
}
console.log("hai inserito: ", rispostaGiocatore);

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
    
    var numeroGenerato = numeroRandom();
    console.log("il numero generato è:", numeroGenerato);
    
    
    var numeroSommato = somma(numGiocatore, numeroGenerato);
    console.log("la somma di " + numGiocatore + " + " + numeroGenerato + " = " + numeroSommato);

    
    var risultato = pariDispari(numeroSommato);
    if(risultato === rispostaGiocatore){
        console.log("Complimenti, hai vinto!");
    }else{
        console.log("Mi dispiace ma hai perso!");
    }
}

//genera funziona numero random da 1 a 5
function numeroRandom(){
    return Math.floor(Math.random() * 5) + 1;
}

// somma i due numeri
function somma(num1, num2){
    return num1 + num2;
}

//stabilisce se la somma è pari o dispari
function pariDispari(num){
    if(num % 2 == 0){
        return "pari";
    }else{
        return "dispari";
    }
}