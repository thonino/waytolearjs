// Exercice 1   
// concaténer deux tableaux
// function concatTab(a, b){
//   // Spread syntax (Syntaxe de décomposition)
//   return [...a, ...b];
//   let tab = a;
//   // boucle for : 
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

// ma solution forEach :
// function check(tab, val){
//   let res = false ;
//   tab.forEach(function(tab,i){
//     return tab === val ? res = i : null;
//   })
//   return res !== false ? res : -1;
// }

// Ma solution for
// function check(tab, val){
//   let res = false;
//   for (i = 0 ; i <= tab.length; i++) {
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

// function check(tab, val) {
//   let res = false; 
//   tab.forEach((e) => {
//     res = (e === val) ? true : res; 
//   });
//   return res;
// }

// avec for :
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
function plr(n){
  let length = n.length;
  let tab = n.split("");
  
}