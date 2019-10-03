/*
Daniel Causey
October, 1st 2019
CIS-131-102
Javascript Objects Lab
*/

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0
};

//Aurora is hit by an arrow and suffers a wound.
aurora.health -= 20;

//Aurora gains an enchanted belt that increases her strength.
aurora.strength += 10;

//Aurora defeats a foe and gains experience from her fight.
aurora.xp += 15;

describe(aurora)

function describe (character){
    console.log(`${character.name} has ${character.health} hitpoints and a strength score of ${character.strength}. They currently have ${character.xp} experience points`);
}

const dog = {
    name: "Carl",
    breed: "mutt",
    size: "miniscule",
    bark(){
        return `ruff ruff`;
    }
}

console.log(`${dog.name} is a ${dog.breed} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}!`);

const account = {
    name: "Alex",
    balance: 0,
    credit(value){
        this.balance += value;
    },
    describe(){
        return `Account Owner: ${this.name}, has a balance of ${this.balance}`;
    }
}

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());