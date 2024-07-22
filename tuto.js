// ------------ Fonctions ------------ //

// fonction régulière :
function fxReg() { return "Hello World!"; }
// console.log(fxReg())

// fonction avec ES5 :
fxES5 = function() { return "Hello World!"; }
// console.log(fxES5())

// fonction avec ES6 :
fxES6 = () => "Hello World!";
// console.log(fxES6())

// ------------ JSON ------------ //
// JavaScript Object Notation.
// Pour transférer des données entre le serveur et le client
// Exemple :
let person = {
  "name" : "Alex",
  "age" :  25,
  "address" : "Paris"
};

// Types string :
  let string = { "name": "Alex" }
// Types number :
  let number = { "age": 25 }
// Types tableau :
  let tabbleau = { "tab": [1, 2, 3, 4, 5, 6] }
// Types boolean :
  let bool = { "open": true, "close": false }
// Types person :
  let personne = { "person": { "name": "Alex"} }
// Types date :
  let date = { "DateNaissance": "1996-01-25 20:00:00 +0100" }

// Lire Json :
let object1 = {
  "name" : "Alex",
  "age" :  "25",
  "address" : "Paris"
};
// console.log("Le nom est:  " +object1.name);
// console.log("L'age est: " + object1.age);
// console.log("L'adresse est: "+ object1.address);

var object2 = [{
  "name" : "Alex",
  "age" :  "25",
  "address" : "Paris"
},
{
  "name" : "Emily",
  "age" : "22",
  "address" : "Toulouse"
}];
console.log("Le nom du 1er objet est:  " + object2[0].name);  
console.log("Le nom du 2éme object est : " + object2[1].name);  


// ------------ Fonction Js ------------ //

// Page précédente : history.back()  
// Exemple : 
<button onclick="retour()">
  Retourner
  </button>
function retour() { window.history.back(); }

// Message de confirmation :
<button onclick="confirmer()">Supprimer</button>
function confirmer(){
  var res = confirm("Êtes-vous sûr de vouloir supprimer?");
  if(res){  } // logique de suppression
}

// Détecter un appareil mobile :
function isMobileDevice() { 
  if( navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
    return true;
  }
else {
    return false;
  }
}
// forcer Uppercase
<input type="text"  onkeyup="this.value=this.value.toUpperCase()"/>
