/*
Daniel Causey
October, 3rd 2019
CIS-131-102
Javascript Constructor Lab
*/

// function artifice(name,effect,bonus,item){
//     this.itemName = name;
//     this.itemEffect = effect;
//     this.itemBonus = bonus;
//     this.itemSlot = item;
    
//     this.collectItem = function(newItem){

//     }
// }

const magicItem = {
    name: "Gungnir, The Unerring Spear",
    strength: 255
}

function character(name, strength){
    this.characterName = name;
    this.characterStrength = strength;
    this.characterItem = "";

    this.collectItem = function(newItem){
        this.characterItem = newItem;
    }
}

const character1 = new character("Forcystus", 80);
character1.collectItem(magicItem);
//console.log(character1);
console.log(character1.characterName + " is wielding " + character1.characterItem.name);

const character2 = new character("Lucasta", 72);
console.log(character2.characterName);
