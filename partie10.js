// Exercice 1
// addition ou concatenation selon type
  function add(a, b){
    return typeof a === "string" && typeof b === "string" ? Number(a) + Number(b) :
    typeof a === "number" && typeof b === "number" ? String(a) + String(b) :
    typeof a !== typeof b ? "null" : null;
  }
console.log(add("2", "3"));
console.log(add(2, 3));
console.log(add("2", 3));

// Exercice 2
// renvoie le produit de tous les entiers impairs dans un tableau.
// filter(), reduce() :
// reducer() est une fonction qui permet d'accumuler
// (a,b)=> a*b : a (accumulateur) b (élément)
// function product(tab) {
//   return tab.filter(i => i % 2 !== 0).reduce((a,b) => a * b);
// }
// forEach() :
// function product(tab) {
//   let count = 1;
//   tab.forEach(e => e % 2 ? count = count * e : null);
//   return count ;
// }
// console.log(product([1, 2, 3, 4]));
// console.log(product([3, 6, 8, 5, 5, 7]));
// console.log(product([1, 0, 1, 0, 1, 0]))

// Exercice 3
// répète chaque caractère dans une chaîne n fois
// fill(), new Array :
// function check(string, n) {
//   return [...string].map(e => new Array(n).fill(e).join('')).join("");
// }
// repeat() :
// function check(string, n) {
//   return [...string].map(c => c.repeat(n)).join('');
// }
// console.log(check("alex", 3));
// console.log(check("waytolearnx", 1));
// console.log(check("bob", 2));

// Exercice 4
// supprimer les objets commençant par Z
// function del(tab) {
//   return tab.filter(e => e[0] !== "Z" )
// }
// console.log(del(["Bob", "Alex", "Zoello"]));
// console.log(del(["Lion", "Zebra", "Gazelle"]));
// console.log(del(["Mercedes", "Bmw", "Audi"]));

// Exercice 5
// filtrer les integers
// typeof :
// function filter(tab) {
//   return tab.filter(e => typeof e === "number")
// }
// Number.isInteger :
// function filter(tab) {
//   return tab.filter(Number.isInteger);
// }
// console.log(filter([1, 2, "3", "4", "5", 6]));
// console.log(filter(["Vache", 20, "Cheval", 1, "Poule", 50]));
// console.log(filter(["Str", false, 5.56, 6]));

// Exercice 6
// mixer les coordonnés x et y dans un tableau
// function mix(x, y) {
//   return [...x].map((e,i) => [e,y[i]])
// }
// console.log(mix([0, 2, 5], [8, 6, 9]));
// console.log(mix([2, 2], [4, 8]));
// console.log(mix([1], [2]));

// Exercice 7
// remplace toutes les voyelles par x
// function check(string, x) {
//   return string.replace(/[aeyuio]/g , x)
// }
// console.log(check("voyelle", "$"));
// console.log(check("boulevard", "?"));
// console.log(check("bouche", "@"));

// Exercice 8
// calculer le déterminant d’une matrice 2 x 2.
// function det(matrice) {
//   return (matrice[0][0]*matrice[1][1])-(matrice[0][1]*matrice[1][0]);
// }
// console.log(det([[1, 1],[2, 3]]));
// console.log(det([[6, 4],[2, 3]]));
// console.log(det([[2, 4],[4, 2]]));

// Exercice 9
// renvoie l’extension des fichiers
// function get(files) {
//   return files.map(e => e.split(".")[1])
// }
// console.log(get(["file.html", "file.js"]));
// console.log(get(["image.jpg", "image.png", "image.gif"]));
// console.log(get(["file.pdf", "file.txt", "file.docx"]));