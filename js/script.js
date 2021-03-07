var calculator = document.getElementById('calculate');

var name_hamb =  document.getElementById('name_hamburgher');

var ingredients = document.getElementsByName('prodotto')
ingredients.className = "more_ingredients";

var carnet = ["promo20", "ciao20", "benvenuto20"];

var coupon = document.getElementById('discount_coupon');

var aggiunta = 0;

var somma = 0;


calculator.addEventListener("click",
  function(){
    somma = 50;
    aggiunta = 0;
    if (name_hamb.value != "" ) {
    }else {
      console.log(alert("Inserisci il nome del panino"));
    }
    for (var i = 0; i < ingredients.length; i++) {
      if (ingredients[i].checked) {
        aggiunta = parseInt(ingredients[i].value);
        somma = somma + aggiunta;
        }
      }
      if (carnet.includes(coupon.value)) {
        somma -= somma * 0.2;
      }


      document.getElementById('big_total').innerHTML =  somma.toFixed(2) + " $";
    }
);
