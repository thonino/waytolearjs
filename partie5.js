// Exercice 1
// Si multiple de 3 « Hello ». 
// Si multiple de 5 « World ».
// Si multiple de 3 et 5 « Hello World ».
// if : 
// function check(n) {
//   let res = "";
//   if (n % 15 === 0 ) { res = "hello world"}
//   else if (n % 3 !== 0 ) { res = "hello"}
//   else if (n % 5 !== 0) { res = "world"}
//   return res;
// }
// ternaire :
// function check(n) {
//   return n % 15 === 0 
//     ? "Hello World" 
//     : n % 3 === 0 
//       ? "Hello" 
//       : "World";
// }
// console.log(check(3));
// console.log(check(5));
// console.log(check(15));

// Exercice 2
// Écrivez l’expression régulière qui révèle le message caché
// replace() :
// /\d/ : chiffre 0 à 9 ; /g/ : global ; '' : ce qui est remplacé
// let string = "242Welcome23 45to344 254324WayToLearnX!";
// let result =  string.replace(/\d/g, '');
// match().join('') :
// \D+ : caractères non numériques (\D) une ou plusieurs fois (+).
// let string = "242Welcome23 45to344 254324WayToLearnX!";
// let result = string.match(/\D+/g).join("")
// console.log(result);

// Exercice 3
// retourne un tableau avec les éléments multipliés par deux.
// map() :
// function tabx2(tab){
//   return tab.map(i => i * 2)
// }
//  for :
// function tabx2(tab){
//   let res = [];
//   for (i = 0; i<tab.length; i++) {
//     res.push(tab[i]*2)
//   }
//   return res ;
// }
// forEach :
// function tabx2(tab){
//   let res = [];
//   tab.forEach((element)=> res.push(element*2))
//   return res ;
// }
// console.log(tabx2([1, 2, 3]));
// console.log(tabx2([5, 10, 20]));
// console.log(tabx2([100, 200, 300]));

// Exercice 4
// renvoie ture si c’est un triangle
// function isTriangle(a,b,c){
//   return a + b > c && b + c > a && a + c > b ;
// }
// console.log(isTriangle(2, 3, 4));
// console.log(isTriangle(2, 4, 5));
// console.log(isTriangle(8, 2, 1));

// Exercice 5
// renvoie la valeur ASCII du caractère transmis
// function showascii(n){
//   return n.charCodeAt(0);
// }
// console.log(showascii("A"));
// console.log(showascii("a"));
// console.log(showascii("+"));

// Exercice 6
// si valeur d’une chaîne est supérieur  à 1 
// function check(f){
//   return eval(f) > 1 ;
// }
// console.log(check("2/2"));
// console.log(check("8/2"));
// console.log(check("1/2"));

// Exercice 7
// renvoie la somme de tous les nombres du tableau.
// forEach :
// function sumtab(tab){
//   let res = 0 ;
//   tab.forEach((element)=> res += element)
//   return res ;
// }
// for :
// function sumtab(tab){
//   let res = 0 ;
//   for(i = 0 ; i < tab.length ; i++){
//     res += tab[i];
//   }
//   return res ;
// }
// function sumtab(tab){
//   let res = 0 ;
//   for(i = 0 ; i < tab.length ; i++){
//     res += tab[i];
//   }
//   return res ;
// }
// console.log(sumtab([1, 1, 1]));
// console.log(sumtab([1, 2, 3]));
// console.log(sumtab([-2, 2, 1]));

// Exercice 8
// transforme en un tableau de longueur de chaque mot.
// map : 
// function check(tab){
//   return tab.map((i)=> i.length)
// }
// for : 
// function check(tab){
//   let res = [];
//   for(i = 0; i < tab.length;i++){
//     res.push(tab[i].length)
//   }
//   return res;
// }
// forEach :
// function check(tab){
//   let res = [];
//   tab.forEach((element)=> res.push(element.length))
//   return res;
// }
// console.log(check(["A", "B", "C"]));
// console.log(check(["Welcome", "To", "WayToLearnX"]));
// console.log(check(["Bob", "Ali", "Thomas"]));

// Exercice 9
// function check(str) {
//   const voyelleGgroupe = str.match(/[aeiouAEIOU]+/g);
//   return voyelleGgroupe ? voyelleGgroupe.length : 0;
// }
// Afficher la sortie
// console.log(check("SOSOSOSO"));      
// console.log(check("HAHAHAHAHA"));    
// console.log(check("RIRIRIRIRIRIRIRIRIRI")); 
// console.log(check("louilouiloui")); 