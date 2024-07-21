// Exercise 1
// true ou false, selon que les caractères sont en ordre ou non
// split("").sort().join("") :
// function checkOrder(string){
//   return string.split("").sort().join("") === string;
// }
// console.log(checkOrder("abc"));
// console.log(checkOrder("zyx"));
// console.log(checkOrder("123"));
// console.log(checkOrder("aabbcc"));

// Exercise 2
// concaténer un string à chaque sous-chaine du tableau
// function addEnd(tab,fin){
//   return tab.map((e) => e+fin)
// }
// console.log(addEnd(["accept", "achet", "adapt"], "able"));
// console.log(addEnd(["aim", "act", "ard"], "ant"));

// Exercise 3
// vérifie le type de caractère
// function checkType(x){
//   return typeof(x);
// }
// console.log(checkType("WayToLearnX"));
// console.log(checkType(1));
// console.log(checkType("250"));

// Exercise 4 A
// renvoie le nombre de mots dans une phrase
// function check(string){
//   return string.split(" ").length;
// }
// Exercise 4 B
// compter le nomtre d'élement dans le tab
// function check(string){
//   return string.split("").reduce((count, element)=>{
//     return (element === " ") ? count + 1 : count;
//   }, 0);
// // }
// console.log(check("Welcome to WayToLearnX"));
// console.log(check("Hello World"));
// console.log(check("I am going to my school"));

// Exercise 5
// renvoie le total de tous les nombres impairs (n inclus)
// for() : 
// function check(n) {
//   let res = 0 ; 
//   for(i=0; i <= n ; i++){
//     i % 2 ? res += i : null;
//   }
// 	return res ;
// }
// console.log(check(3));
// console.log(check(7));
// console.log(check(59));

// Exercise 6
// true si string est tout en minuscule ou tout en majuscule
// function check(string) {
//   return string === string.toLowerCase() || 
//          string === string.toUpperCase();
// }
// console.log(check("WayToLearnX"));
// console.log(check("waytolearnx"));
// console.log(check("WAYTOLEARNX"));

// Exercise 7
// multiplier toutes les valeurs d’un tableau par la longueur du tableau
// map() :
// function check(tab){
//   return tab.map((element)=> element*tab.length)
// }
// forEach() :
// function check(tab){
//   let res = [];
//   tab.forEach((element)=> res.push(element*tab.length))
//   return res;
// }
// for() : 
// function check(tab){
//   let res = [];
//   for(i=0; i < tab.length; i ++){
//     res.push(tab[i]* tab.length)
//   }
//   return res;
// }
// console.log(check([1, 1, 1]));
// console.log(check([1, 2, 3]));
// console.log(check([0, 0, 0, 0, 2]));

// Exercise 8
// filter() :
// function filter(tab){
//   return tab.filter(element => element !== null)
// }
// for() :
// function filter(tab){
//   let res = [];
//   for( i = 0; i < tab.length; i++){
//     tab[i] !== null ? res.push(tab[i]) : null;
//   }
//   return res;
// }
// forEach() :
// function filter(tab){
//   let res = [];
//   tab.forEach(element => element !== null ? res.push(element) : null);
//   return res;
// }
// console.log(filter(["Alex", null, "Emily", "Bob"]));
// console.log(filter([0, 1, null, 2, null, 3]));
// console.log(filter([null, null, null]));

// Exercice 9
// function bis(year){
//   return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
// }
// console.log(bis(2020));
// console.log(bis(1400));
// console.log(bis(2000));
