// dichiarazione di tutte le variabili
var calculate = document.getElementById('calculate');
var name_ham = document.getElementById('name_hamburgher');
// creo array
var nuova = document.getElementsByName('prodotto');
nuova.className = "select_ingredients";
console.log(nuova);

var item ;
var ingedients = nuova;
var carnet10 = ["10"];
var carnet20 = ["20"];
var carnet30 = ["30"];
var coupon= document.getElementById('discount_coupon');

// innesco un ciclo per farmi fare l'alert sul check(non funziona bene)
  for (var i = 0; i < nuova.length; i++) {
    item = document.getElementsByTagName("input")[i];
    console.log(item);
    item.addEventListener('change',
      function(){
        if (item.checked && name_ham.value == "") {
          alert("inserisci il nome del panino");
          console.log("stop");
        }
      }
    );
  }
// all'evento, il mio bottone scateno le seguenti condizioni
calculate.addEventListener('click',
  function(){
    // le dichiaro dentro per avere il valore
    var somma = 50;
    var aggiunta = 0;
// se il nome è diverso da vuoti famm l'alert
    if (name_ham.value != "" ) {
    }else {
      console.log(alert("inserisci il nome del panino"));
    }
    // vado a ciclare quelli checked che hanno un valore
    // mi sono creata un array dal suo name input = nuovo
    // me lo faccio restituire con parseint
    // imposto la somma
    for (var i = 0; i < nuova.length; i++) {
      if (nuova[i].checked) {
        aggiunta = parseInt(nuova[i].value);
        somma += aggiunta;
        // il cosole mi restituisce il valore dell'elemento
        // console.log(nuova[i].value);
      }
    }
    // fuori dal for, ma dentro la function imposto lo sconto sulla somma,
     // fuori dal for sennò lo cicla
    if (carnet10.includes(coupon.value)) {
      somma -= somma * 0.1;
      console.log(somma);
    }if (carnet20.includes(coupon.value)) {
      somma -= somma * 0.2;
    }if (carnet30.includes(coupon.value)) {
      somma -= somma * 0.3;
    }
    // to.fixed 2 mi restituisce due decimali
    document.getElementById("big_total").innerHTML = somma.toFixed(2) + " $";
  }
);
