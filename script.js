// CONSEGNA

// PRIMO ESERCIZIO

// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

// var palla = {
//     "nome" : "Palla",
//     "peso" : 10
// }


// palla.peso = parseInt(prompt("Dimmi quanto pesa la palla"));


// console.log(palla);



// SECONDO ESERCIZIO

// Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore.


// var arrayBici = [
//     {
//         "nome" : "Bici 1",
//         "peso" : 8
//     }, 

//     {
//         "nome" : "Bici 2",
//         "peso" : 10
//     }, 

//     {
//         "nome" : "Bici 3",
//         "peso" : 7
//     }, 
// ];

// console.log(arrayBici);


// var primaBici = arrayBici[0];
// var secondaBici = arrayBici[1];
// var terzaBici = arrayBici[2];

// var pesoPrimaBici = primaBici.peso;
// var pesoSecondaBici = secondaBici.peso;
// var pesoTerzaBici = terzaBici.peso;

// console.log(pesoPrimaBici);
// console.log(pesoSecondaBici);
// console.log(pesoTerzaBici);

// var pesoMinore = Math.min(pesoPrimaBici, pesoSecondaBici, pesoTerzaBici);
// console.log("peso minore: " + pesoMinore);

// if(pesoMinore == pesoPrimaBici) {
//     console.log(primaBici);
// } else if( pesoMinore == pesoSecondaBici) {
//     console.log(secondaBici);
// } else {
//     console.log(terzaBici);
// }


// SOLUZIONE 

// var biciclettaPiuLeggera = arrayBici[0]; // è come una variabile flag che cambia quando trova una bici più leggera

// for(var i = 0; i < arrayBici.length; i++) {
//     var thisBici = arrayBici[i];
//     console.log(thisBici);

//     if(thisBici.peso < biciclettaPiuLeggera.peso) {
//         biciclettaPiuLeggera = thisBici;

//     }
// };

// console.log(biciclettaPiuLeggera);

// FINE SECONDO ESERCIZIO

// TERZO ESERCIZIO 
// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti

var squadreCalcio = [
    {
        "nome" : "Milan",
        "punti fatti" : 0,
        "falli subiti" : 0
    }, 

    {
        "nome" : "Inter",
        "punti fatti" : 0,
        "falli subiti" : 0
    }, 

    {
        "nome" : "Juventus",
        "punti fatti" : 0,
        "falli subiti" : 0
    }, 

    {
        "nome" : "Spezia",
        "punti fatti" : 0,
        "falli subiti" : 0
    }, 
];

for( var i = 0; i < squadreCalcio.length; i++) {
    thisSquadra = squadreCalcio[i];
    
    thisSquadra["punti fatti"] = Math.floor(Math.random() * 100);
    thisSquadra["falli subiti"] = Math.floor(Math.random() * 10);

    console.log(thisSquadra);
}