const exportovanafunkce = require("./funkce.js");
const tostejne = require("./funkce2.js");
const cislo=Math.round(Math.random()*10);
console.log("Cislo je " + cislo + "\n");

console.log("funkce - cislo/2 = " + exportovanafunkce.funkce(cislo));
console.log("funkce2 - cislo/2 = " + tostejne(cislo));