// Exercice 1   
// concaténer deux tableaux
// function concatTab(a, b){
//   // Spread syntax (Syntaxe de décomposition)
//   return [...a, ...b];
//   let tab = a;
//   // for : 
//     for(i=0 ; i<=b.length ; i++){
//       tab.push(b[i]);
//     }
//     return tab;
// }
// console.log(concatTab([1, 2], [3, 4]));
// console.log(concatTab([9, 8], [1, 5, 6, 7]));
// console.log(concatTab([1, 1, 1], [2, 2, 2]));

// Exercice 2
// index d’un élément donné. -1 Si l’élément n’existe pas.

// forEach :
// function check(tab, val){
//   let res = false ;
//   tab.forEach(function(tab,i){
//     return tab === val ? res = i : null;
//   })
//   return res !== false ? res : -1;
// }

// for :
// function check(tab, val){
//   let res = false;
//   for (i = 0 ; i < tab.length; i++) {
//     if(tab[i] === val){res = i}
//   }
//   return res !== false ? res : -1; 
// }

// correction for :
// function check(tab, val){
//   for(var i = 0; i < tab.length; i++){
//     if(tab[i] == val) return i;
//   }
//   return -1;
// }

// correction forEach :
// function check(tab, val){
//   let res = -1;
//   tab.forEach((element, i) => {
//   if (element === val && res === -1) {
//       res = i;
//     }
//   });
//   return res;
// }
// console.log(check([2, 7, 1], 7));
// console.log(check([6, 9, 5], 6));
// console.log(check([6, 7, 8], 9));

// Exercice 3
// vérifier si un tableau contient un nombre 
// forEach :
// function check(tab, val) {
//   let res = false; 
//   tab.forEach((e) => {
//     res = (e === val) ? true : res; 
//   });
//   return res;
// }

// for :
// function check(tab, val){
//   let res = false; 
//   for(i=0; i<= tab.length; i++){
//     tab[i] === val ? res = true : false;
//   }
//   return res;
// }
// console.log(check([6, 7, 8], 7)); 
// console.log(check([1, 2, 3], 5)); 
// console.log(check([], 0));    

// Exercice 4
// true si le dernier caractère du nom est un s 
// forEach :
// function plr(n){
//   let res ;
//   n.split("").forEach((element)=> res = element)
//   return res === "s" ;
// }
// // for :
// function plr(n){
//   let last = n.split("").length - 1;
//   return n[last] === "s";
// }

// console.log(plr("Thomas"));
// console.log(plr("Ali"));
// console.log(plr("Alex"));
// console.log(plr("Alvis"));

// Exercice 5
// true si une chaîne contient des espaces.
// forEach :
// function check(string) {
//   let res = false;
//   string.split("").forEach((element)=> {
//     element === " " && res === false ? res = true : null ;
//   })
//   return res;
// }
// for : 
// function check(string){
//   let res = false;
//   for(i=0; i < string.length; i++){
//     string[i] === " " && res === false ? res = true : null;
//   }
//   return res;
// }
// include() :
// function check(string){
//   return string.includes(" ");
// }
// console.log(check("Thomas"));
// console.log(check("Hello World!"));
// console.log(check(" "));
// console.log(check(""));

// Exercice 6
// crée un objet comme qui renvoie une chaîne qui représente une personne

// function pers({nom, age, ville}){
//   return nom + " a " + age + " ans. Il habite à " + ville;
// }
// console.log(pers({nom: "Thomas", age: "25", ville: "Paris"}));
// console.log(pers({nom: "Emily", age: "22", ville: "Nantes"}));

// Exercice 7
// afficher Aujourd’hui, je me sens {nam}
// si {nam} n'existe pas aficher "neutre"
// ternaire :
// function feel(nam){
//   return `Aujourd'hui, je me sens ${nam ? nam : "neutre"}`;
// }
// ou :
// function feel(nam){
//   return `Aujourd'hui, je me sens ${nam || "neutre"}`;
// }
// console.log(feel("heureux"));
// console.log(feel("triste"));
// console.log(feel());

// Exercice 8
// renvoie nombre d’arguments avec lesquels elle a été appelée.
// function check(){
//   return arguments.length;
// }
// console.log(check());
// console.log(check({}));
// console.log(check("A"));
// console.log(check("A", "B"));

// Exercice 9
// function check(string) {
//   let last = string.length - 1;
//   return string[last] === "s" ;
// }
// console.log(check("enfants"));
// console.log(check("filles"));
// console.log(check("fille"));
// console.log(check("enfant"));