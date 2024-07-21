// Exercice 1
// calculer a distance de Hamming entre a et b
// spread , filter():
// function check(a, b) {
//   return [...a].filter((element, i) => element != b[i]).length
// }
// forEach() :
// function check(a, b){
//   let count = 0;
//   a.split("").forEach((element, i) => element !== b[i] ? count += 1 : null)
//   return count ;
// }
// for :
// function check(a, b) {
//   let count = 0;
//   for(i = 0 ; i < a.length ; i ++){
//     a[i] !== b[i] ? count += 1 : null;
//   }
//   return count;
// }
// console.log(check("abcdde", "abcdbe"));
// console.log(check("abefcd", "cdfgea"));
// console.log(check("agresser", "adresser"));
// console.log(check("attention", "intention"));

// Exercice 2
// envoie le minimum et le maximum dans un tableau 
// spread , Math.min(), Math.max()
// function minMax(tab) {
//   return [Math.min(...tab), Math.max(...tab)];
// }
// sort() :
// function minMax(tab) {
// let tabSort = tab.sort();
// let res = [];
// res.push(tabSort[0], tabSort[tabSort.length-1]);
// 	return res;
// }
// forEach() :
// function minMax(tab) {
//   let res = [];
// 	tab.sort().forEach((e,i) => [
//     i === 0 ? res.push(e): null , 
//     i === tab.length-1 ? res.push(e) : null 
//   ]); 
//   return res;
// }
// console.log(minMax([8, 1, 9, 2, 6]));
// console.log(minMax([22, 2]));
// console.log(minMax([5]));

// Exercice 3
// compte le nombre de majuscules dans une chaîne de caractères
// ma solution :
// function check(string) {
// 	return string.split("").filter(element => /[A-Z]/g.test(element)).length
// }
// correction :
// function check(string) {
//   return string.split(/[A-Z]/).length - 1;
// }
// console.log(check("abcdEFG"));
// console.log(check("WayToLearnX"));
// console.log(check("abcdefghigklmnopkrstvuwxyz"));

// Exercice 4
// compte le nombre de syllabes d’un mot
// function check(string) {
// 	return string.split("-").length
// }
// console.log(check("prin-temps"));
// console.log(check("ar-rê-te"));
// console.log(check("ther-mo-mè-tre"));

// Exercice 5
// convertir km en miles au 4èm décimal
// function kmToMiles(km) {
// 	return (km * 0.621371).toFixed(4)
// }
// console.log(kmToMiles(5));
// console.log(kmToMiles(7));
// console.log(kmToMiles(10));

// Exercice 6
// renvoie le nom de mois correspondant au chiffre
// function month(n) {
//   let mois = [
//     "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
//     "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
//   ];
//   return mois[n-1];
// }
// console.log(month(3));
// console.log(month(12));
// console.log(month(6));

// Exercice 7
// afficher "Majuscule"  "Minuscule" ou "Mix"
// function check(string) {
//   let upr = string.toUpperCase();
//   let lower = string.toLowerCase();
//   let res = "Mix";
// 	string === upr ? res = "Majuscule" : null;
// 	string === lower ? res = "Minuscule" : null;
//   return res;
// }

// console.log(check("WAYTOLEARNX"));
// console.log(check("waytolearnx"));
// console.log(check("WayToLearnX"));

// Exercice 8
// afficher l'heure avec regex
// let str = "Le restaurant ouvre à 08:00 situé au boulevard du 200:200";
// let expr = /\d{2}:\d{2}/
// let result = str.match(expr);
// console.log(result.join(""));

// Exercice 9
// tableau binainaire en décimal
// function binToDec(tab) {
// 	return parseInt(tab.join(""), 2);
// }
// console.log(binToDec([0, 0, 0, 1, 1, 1, 1, 1]));
// console.log(binToDec([0, 0, 0, 0, 0, 0, 0, 1]));
// console.log(binToDec([1, 0, 0, 0, 0, 0, 0, 0]));