const exportovanafunkce = require("./funkce.js");
const tostejne = require("./funkce2.js");
const cislo=Math.round(Math.random()*10);
const pokus=require('./funkce3.js');


console.log(`Cislo je ${cislo}\n`);




console.log("funkce - cislo/2 = ",exportovanafunkce.funkce(cislo));
console.log("funkce2 - cislo/2 = " + tostejne(cislo));

const objekt={
    jmeno: "Vilém",
    druh: "Iguana Iguana",
   //metoda v objektu ↓
    funkce: function(){
        console.log(this);
    },
};

objekt.funkce();

const funkce=objekt.funkce;
funkce();

const funkce2=objekt.funkce.bind(objekt);
funkce2();

normal(objekt.druh);

function normal(guan){
    console.log(guan);
}

let guan=guan=>{
    console.log(guan);
}

guan(objekt.druh);

poleobjektu=[
    {druh:"Iguana Iguana"},
    {druh:"Pogona Vitticeps"},
    {druh:"Iguana Iguana"},
]
let agama=poleobjektu.filter(function(gama){if(gama.druh==="Pogona Vitticeps")return gama.druh});
console.log(agama);

setTimeout(()=>{console.log("guan")},1000);

const pole=[1,2,3,4,5];
const dvojnasobek=pole.map(cislo=>cislo*2);
console.log(dvojnasobek);

//const jesterka=poleobjektu.druh.... ↓
const {druh:jesterka,jmeno:nazev}=objekt;
console.log(`${nazev}\n${jesterka}`);


const prvni=[1,2,3];
const druhy=[4,5,6];
//const oba=prvni.concat(druhy) ↓ ... rozdeli pole
const oba=[...prvni,7,...druhy];
console.log(oba);


class Jester{
    constructor(jmeno,druh){
        this.jmeno=jmeno;
        this.druh=druh;
    }
    olizniZem(){
        console.log(`mlem - ${this.jmeno}`);
    }
}

const jestervnovemobjektu= new Jester("Otík","Agama");
jestervnovemobjektu.olizniZem();

class rozmery extends Jester{
    constructor(jmeno,druh,vaha){
        super(jmeno,druh);
        this.vaha=vaha;
    }
    olizniKytku(){
        console.log(`${this.jmeno} - vazim ${this.vaha}g`);
    }
}

const geko= new rozmery("leos","geggo",60);
geko.olizniZem();
geko.olizniKytku();


pokus();