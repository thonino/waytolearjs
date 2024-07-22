// Exercice 1
// true si string est un palindrome
// spread 
// function check(string) {
//   return  [...string].reverse().join("") == string
// }
// ma solution :
// function check(string){
//   return string === string.split("").reverse().join("");
// }
// console.log(check("NON"));
// console.log(check("TOTO"));
// console.log(check("SOS"));
// console.log(check("SELLES"));

// Exercice 2
// afficher addition, soustraction division ou null
// function check(a, b) {
// 	let res = null;
//   a + b === 8 ? res = "addition" 
//               : a - b === 8 || b - a  === 8 ? res =  "soustraction"
//               : a / b === 8 || b / a === 8 ? res = "division" 
//               : null;
//   return res;
// }
// console.log(check(4, 4));
// console.log(check(10, 2));
// console.log(check(32, 4));
// console.log(check(6, 6));

// Exercice 3
// afficher l'écart entre le mieux payé et le moins bien payé
// function check(a, b, c){
//   return Math.max(a, b, c) - Math.min(a, b, c);
// }
// console.log(check(200, 10, 90));
// console.log(check(56, 29, 16));
// console.log(check(2, 10, 5));

// Exercice 4
// ajouter l'index de chaque valeur à elle même
// function addi(tab){
//   return tab.map((e,i)=> e + i)
// }
// console.log(addi([0, 0, 0, 0]))
// console.log(addi([2, 1, 0, 1]))
// console.log(addi([9, 8, 7, 6]))

// Exercice 5
// ajouter espace entre chaque lettre
// function addSpace(string){
//   return [...string].join(" ")
// }
// ma solution
// function addSpace(string){
//   return [...string].map((e,i) => e[i] !== string[0] ? " "+e : e).join("")
// }
// console.log(addSpace("waytolearnx"));
// console.log(addSpace("Hello BoB"));
// console.log(addSpace("Thank you"));

// Exercice 6
// trier le tableau par prix croissant
// function check(b){
//   return b.sort((a, b) => a.prix - b.prix);
// }
// b = [
//   {nom: "citron", prix: 50},
//   {nom: "menthe", prix: 35},
//   {nom: "fraise", prix: 5},
// ]
// console.log(check(b));

// Exercice 7
// true si nombre uniforme
// correction :
// function check(b) {
//   return new Set('' + b).size === 1
// }
// ma solution :
// function check(b) {
//   return new Set([...String(b)]).size === 1;
// }
// console.log(check(444));
// console.log(check(-444));
// console.log(check(0));

// Exercice 8
// aficher le nombre de caractère unique 
// correction :
// function check(a, b) {
//   return new Set(a + b).size;
// }
// ma solution :
// function check(a, b) {
//   return new Set([...a, ...b]).size
// }
// console.log(check("attention", "intention"));
// console.log(check("plus", "tous"));
// console.log(check("bis", "lis"));

// Exercice 9
// forEach() :
// function check(tab){
//   let count = 0;
//   tab.forEach(e => count += e)
//   return count;
// }
// for() : 
// function check(tab){
//   let count = 0;
//   for(i = 0 ; i < tab.length; i ++){
//     count += tab[i]
//   }
//   return count ;
// }
// console.log(check([1, 2, 3]));
// console.log(check([1, 2]));
// console.log(check([]));