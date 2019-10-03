/*
Daniel Causey
October, 1st 2019
CIS-131-102
Javascript Objects
*/
/*

//Object Literal, designed with object pairs.
const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "bic"
};

console.log(pen.type);
console.log(pen.brand);

//use node .\filename.js to test it if node js is installed.

pen.color = "red";
console.log(pen.color);

console.log(`I write using a ${pen.color} ${pen.brand} ${pen.type} pen`);

pen.price = 2.5;
console.log(`My pen costs $${pen.price}`);

*/
//**************************************************************************

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
};

//console.log(`${aurora.name} has ${aurora.health} hitpoints and a strength score of ${aurora.strength}.`);
// Aurora is hit by an arrow causing 20 points of damage.
aurora.health -= 20;

//console.log(`${aurora.name} currently has ${aurora.health} hitpoints.`);
//Aurora acquires a +10 belt of strength.
aurora.strength += 10;

//console.log(`${aurora.name} currently has a strength score of ${aurora.name}.`);

describe(aurora)

function describe (character){
    console.log(`${character.name} has ${character.health} hitpoints and a strength score of ${character.strength}.`);
}

const borealis = {
    name: "Borealis",
    health: 120,
    strength: 40,
    describe(newName){
        //console.log(`My name is ${this.name}!`)
        this.name = newName;
        return `My name is ${this.name}!`;
    }
}

console.log(borealis.describe('John'));

describe(borealis)