// Exercise 1
// vérifier La valeur et le type entre a et b
// function check(a,b){
//     return a === b;
// }
// console.log(check(5, 5));
// console.log(check(5, 0));
// console.log(check(5, false));
// console.log(check(5, "5"));

// Exercise 2
// renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.

// function isEmpty(a){
//     return a.length == 0;
// }
// console.log(isEmpty("1"));
// console.log(isEmpty("WayToLearnX"));
// console.log(isEmpty("  "));
// console.log(isEmpty(""));

// Exercise 3
// renvoyez a et b en une seule chaîne au format « a | b ».
// function concat(a, b) {
//     return a + ' | ' + b;
// }
// console.log(concat("True", "False"));
// console.log(concat("On", "Off"));
// console.log(concat("A", "B"));

// Exercise 4
// renvoie "hi << name >>, welcome ! ", fonction fléchée
// let text = name => "Hi " + name + ", Welcome !";
// console.log(text("Thomas"));
// console.log(text("Alex"));
// console.log(text("Emily"));

// Exercise 5
// renvoie la longueur d’une chaîne via une boucle
// function size(a){
//   // return a.length;
//   // forEach : 
// let count = 0 ; 
// a.split("").forEach(() => count += 1);
// return count;
//   // for :
//   let count = 0 ;
//   for(i=0;  a.split("")[i] !== undefined; i++){count += 1}
//   return count;
// }

// console.log(size("alex"));
// console.log(size("x"));
// console.log(size(""));

// Exercise 6
// renvoie TRUE si a et b ont le même nombre de caracteres

// function check(a, b){
//   return a.split("").length === b.split("").length;
// }
// console.log(check("AA", "BB"));
// console.log(check("123", "1"));
// console.log(check("Ali", "Bob"));

// Exercise 7
// trouve le périmètre d’un rectangle avec a et b
// function perimetre(a,b){
//   return 2 * (a + b);
// }
// console.log(perimetre(2, 6));
// console.log(perimetre(3, 10));
// console.log(perimetre(1, 5));

// Exercise 8
// compter le nombre de pattes
// function nbrsPattes(poulets, vaches, chevaux){
//   return poulets*2 + vaches*4 + chevaux*4;
// }
// console.log(nbrsPattes(1, 4, 2));
// console.log(nbrsPattes(2, 2, 2));
// console.log(nbrsPattes(2, 0, 3));

// Exercise 9
// renvoie pair pour nombres pairs impair pour nombres impairs.
// function check(a){
//   return a % 2 ? "impair" : "pair";
// }
// console.log(check(2));
// console.log(check(7));
// console.log(check(22));
