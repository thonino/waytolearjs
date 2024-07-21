// Exercice 1
// trouve tous les nombres pairs de 1 à n
// for() : 
// function isPair(n){
//   let tab = [];
//   for(i = 1 ; i <=  n  ; i ++){
//     i % 2 === 0 ? tab.push(i) : null;
//   }
//   return tab;
// }
// console.log(isPair(6));
// console.log(isPair(4));
// console.log(isPair(2));

// Exercice 2
// true si tous les caractères sont identiques
// spread : 
// Set = stocke valeurs uniques 
// .size de {Set} renvoie le nombre de valeurs uniques.
// function same(string) {
//   return new Set([...string]).size === 1;
// }
// map() :
// function same(string){
//   let tab = [];
//   string.split("").map(() => tab.push(string[0]))
//   return tab.join("") === string;
// }
// forEach() :
// function same(string){
//   let tab = [];
//   string.split("").forEach(() => tab.push(string[0]))
//   return tab.join("") === string;
// }
// for() :
// function same(string){
//   let tab = [];
//   for(i = 0 ; i < string.length ; i++){
//     tab.push(string[0])
//   }
//   return tab.join("") === string;
// }
// console.log(same("bbbbbb"));
// console.log(same("abababab"));
// console.log(same("111111"));

// Exercice 3
// spread, reverse(), slice()
// function mrr(tab){
//   let reversed = [...tab].reverse().slice(1);
//   let res = [...tab, ...reversed]
//   return res;
// }
// for() :
// function mrr(tab){
//   let res = [];
//   for (i = 0 ; i < tab.length ; i++){ 
//     res.push(tab[i]); 
//   }
//   let reversed = [];
//   for(i = tab.length - 2 ; i >= 0 ; i --){
//     reversed.push(tab[i]);
//   }
//   for(i = 0 ; i < reversed.length ; i ++){
//     res.push(reversed[i]);
//   }
//   return res;
// }
// forEach() :
// function mrr(tab){
//   let res = [];
//   tab.forEach(element => res.push(element))
//   let reversed = [];
//   tab.forEach((element,i) => 
//     i !== tab.length - 1 
//     ? reversed.unshift(element) : null
//   );
//   reversed.forEach((element)=> res.push(element))
//   return res;
// }
// console.log(mrr([1, 2, 3]));
// console.log(mrr([9, 8, 7]));
// console.log(mrr([10, 20]));

// Exercice 4
// trouve la somme des n premiers nombres naturels.
// function somme(n){
//   let res = 0;
//   for(i = 0 ; i <= n ; i++){
//     res += i ;
//   }
//   return res;
// }
// console.log(somme(3));
// console.log(somme(2));
// console.log(somme(10));

// Exercice 5
// extraire le nom du catégorie de son URL.
// function checkUrl(url){
//   return url.split("/")[3]
// }
// console.log(checkUrl("https://waytolearnx.com/html/"));
// console.log(checkUrl("https://waytolearnx.com/css/"));
// console.log(checkUrl("https://waytolearnx.com/javascript/"));

// Exercice 6
// envoie true si un objet est vide
// function check(obj){
//   return !Object.keys(obj).length;
// }
// console.log(check({ a: 1, b: 2 }));
// console.log(check({ a: 1 }));
// console.log(check({}));

// Exercice 7
// récupère les n derniers éléments d’un tableau.
// function check(tab, n){
//   return tab.length < n ? "invalide" : tab.slice(tab.length - n);
// }
// console.log(check([8, 1, 5, 2, 4, 9], 3));
// console.log(check([1, 2, 3], 1));
// console.log(check([1, 2, 3, 4], 10));
// console.log(check([1, 2, 3, 4], 0));

// Exercice 8
// supprimer toutes les caractères spéciaux dans une chaîne.
// ^ : placé au début => indique une négation
// a-z : toutes les lettres minuscules de l'alphabet 
// g : application global
// i : insensible à la casse => il inclut les majuscules 
// function rmv(string){
//   return string.replace(/[^a-z]/gi, '')
// }
// console.log(rmv("@W*-a?;+y!°T-8o_&L?e!a=r%$n<X"));
// console.log(rmv(",A@[L]?e*$!x"));
// console.log(rmv("$*;H[!e&}l]l@{^.o"));

// Exercice 9
// function check(string){
//   return string == String(string).split("").reverse().join("");
// }
// console.log(check(212));
// console.log(check(123));
// console.log(check(75257));