// fonction régulière :
function fxReg() { return "Hello World!"; }
// console.log(fxReg())

// fonction avec ES5 :
fxES5 = function() { return "Hello World!"; }
// console.log(fxES5())

// fonction avec ES6 :
fxES6 = () => "Hello world!";
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
// <input type="text"  onkeyup="this.value=this.value.toUpperCase()"/>

// setTimeout
// <button onclick="setTimeout(sayHello, 4000);">Cliquez ici</button>

// convertir number : 
let nbr = 15;
nbr.toString(); // "15" (string)
nbr.toString(2); // "1111" (binary)
nbr.toString(8); // "17" (octa)
nbr.toString(16); // "f" (hexa)

// Méthodes de gestion des tableaux – Array
pop() // Supprime le dernier élément d’un tableau
push() // Ajoute un nouvel élément à la fin du tableau
sort() // Trie les éléments par ordre alphabétique
reverse() // Trier les éléments dans un ordre décroissant
shift() // Supprime le premier élément d’un tableau
toString() // Convertit des éléments en chaînes de caractères
unshift() // Ajoute un nouvel élément au début d’un tableau
concat() // Fusionne plusieurs tableaux en un seul
join() // Combine les éléments d’un tableau en une seule chaîne
slice() // Copie une partie d’un tableau dans un nouveau tableau
splice() // Modifier le contenu d’un tableau en supprimant éléments
valueOf() // Retourne la valeur primitive de l’objet spécifié
indexOf() // Retourne le premier index de l’élément donné 
lastIndexOf() // Retourne le dernier index de l’élément donné

// afficher la sortie des données :
alert() // Affiche la sortie sur une boîte de dialogue du navigateur
confirm() // Ouvre une boîte de dialogue oui/non et renvoie true/false 
console.log() // Affiche la sortie sur la console du navigateur
document.write() // Écrit directement dans le document HTML

// Fonctions globales :
isNaN() // Détermine si une valeur est NaN((Not a Number) ou non
Number() // Convertit l’argument en nombre représentant la valeur de l’objet
eval() // Évalue le code JavaScript représenté sous forme de chaîne
encodeURI() // Encode un URI en UTF-8
decodeURI() // Décode un URI créé par encodeURI() ou d’autres fonctions
decodeURIComponent() // Décode un composant URI
parseInt() // convertit une chaîne de caractères en entier
parseFloat() // convertit une chaîne de caractères en nombre à virgule flottante
isFinite() // Détermine si la valeur transmise est un nombre fini

// Méthodes mathématiques :
random() // Retourne un nombre aléatoire compris entre 0 et 1
round(x) // Arrondie la valeur de x à son entier le plus proche
pow(x, y) // X à la puissance de y
exp(x) // Exponentielle de x
log(x) // Le logarithme naturel (base E) de x
max(x, y, z) // Retourne le maximum
min(x, y, z) // Retourne le minimum
abs(x) // Retourne la valeur absolue de x
sqrt(x) // La racine carrée de x
cos(x) // Le cosinus de x
sin(x) // Le sinus de x
tan(x) // La tangente de x
ceil(x) // Arrondie la valeur de x à l’entier le plus proche

// Méthodes pour la manipulation des dates et heures :
getDate() // Récupère le jour du mois sous forme de nombre (1-31)
getDay() // Le jour de la semaine sous forme de nombre (0-6)
getFullYear() // Année sous la forme d’un nombre à quatre chiffres (aaaa)
getHours() // Retourne l’heure (0-23)
getMilliseconds() // Retourne les millisecondes (0-999)
getMinutes() // Retourne les minutes (0-59)
getMonth() // Retourne le mois sous forme de nombre (0-11)
getSeconds() // Récupère les secondes (0-59)
getTime() // Récupère les millisecondes depuis le 1er janvier 1970
getUTCDate() // Le jour du mois à la date spécifiée selon l’heure universelle.
setDate() // Définit le jour en tant que nombre (1-31)
setFullYear() // Définit l’année
setHours() // Définit l’heure (0-23)
setMilliseconds() // Définit les millisecondes (0 à 999)
setMinutes() // Définit les minutes (0-59)
setMonth() // Définit le mois (0-11)
setSeconds() // Définit les secondes (0-59)
setTime() // Fixe l’heure (en millisecondes depuis le 1er janvier 1970)
setUTCDate() // Définit le jour du mois pour une date en fonction du temps universel

// Méthodes de nœud :
appendChild() // Ajoute un nouveau noeud en tant que dernier enfant
removeChild() // Supprime un nœud enfant
replaceChild() // Remplace un nœud enfant
cloneNode() // Clone un élément HTML
isEqualNode() // Vérifie si deux noeuds sont égaux
isSameNode() // Vérifie si deux noeuds sont identiques
getAttribute() // Retourne la valeur d’attribut spécifiée dans un noeud
hasAttribute() // Retourne true si l’élément a des attributs, sinon false
removeAttribute() // Supprime l’attribut de l’élément spécifié
setAttribute() // Définit ou modifie la valeur de l’attribut spécifié
getElementsByTagName() // retourne les éléments portant le nom de la balise spécifié.