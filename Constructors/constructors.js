/*
Daniel Causey
October, 3rd 2019
CIS-131-102
Javascript Constructors
*/

const dog = {
    name: "Carlos",
    breed: "Xoloitzcuintli",
    birthdate: new Date(),
    speak(sound){
        return `${this.name} is a ${this.breed} dog, he looks at you and barks. ${this.name} lets out an ` + sound + ` sound.`;
        return `${this.name} ${this.sound} `;
    },
    setDate(birthday){
        this.birthdate = new Date(birthday);
    }
}

console.log(dog.speak("arf arf"));

//Date is capitalized as it is a method of the Javascript language, the same goes for things like the Math methods. New refers to making a new copy of a given method.
/*
var d = new Date();
console.log(d);
d = new Date("2018-05-01");
console.log(d);

aryMon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(dog.birthdate);
//console.log(dog.birthdate.getFullYear());
console.log(aryMon[dog.birthdate.getMonth()]);
dog.setDate("2018-01-17");
console.log(dog.birthdate);
*/

/****       Constructor Functions       ****/

function order(item,qty,price,purchaseDate)
{
    this.orderItem = item;
    this.orderQty = qty;
    this.orderPrice = price;
    this.orderdate = new Date(purchaseDate);
    this.updateQty = function(qty)
    {
        this.orderQty = qty;        
    }
    this.displayOrder = function()
    {
        var subTotal = this.orderQty * this.orderPrice;
        return `You ordered ${this.orderQty} ${this.orderItem}s and total is ${subTotal}`;
    }
}

const order1 = new order("DVD", 1, 10.99, Date.now());
console.log(order1);
for (items in order1)
{
    //console.log(items);
    console.log(order1[items]);
}

console.log(order1.displayOrder());
order1.updateQty(20);
console.log(order1.displayOrder());

const order2 = new order("Vinyl Record", 5, 29.99, Date.now());
console.log(order2.displayOrder());
order2.updateQty(1);
console.log(order2.displayOrder());

order3 = new order(dog, 1, 1200, Date.now());
//console.log(order3.displayOrder());
console.log(order3);
console.log(order3.orderItem.name);
