/*
Callbacks
Any function that uses a function as an argument.
*/

function greeting(greet)
{
    console.log(greet);
}

function createGreeting(fname, functionName)
{
    var myGreeting = "Hello " + fname;
    //greeting(myGreeting);
    //var functionName = greeting;
    functionName(myGreeting);
}

//greeting("Daniel");
createGreeting("Noelle", greeting);

/* 
******************************* 

**************Timers***********
*/

//number in myTimer is in milliseconds
var myTimer = setInterval(aFunction, 30000);

function aFunction(){
    alert("Working");
}

//Click event that will stop the timer
document.getElementById('stop').addEventListener('click', function(){
    clearInterval(myTimer);
})


/* 
******************************* 

**************Arrays***********
*/

myDiv = document.getElementById('Array');

var rpgs = ["Anima", "Pathfinder", "Wild Talents", "Epithet System", "Shadowrun"];

//store different types of elements
//var elements = ["hello", 7. { message: "Salutations"}, true];

myDiv.innerHTML = rpgs.length;

myString = "<select id ='rpg'>";

//using the for loop
/*for (var i = 0; i < rpgs.length; i++)
{
    myString += "<option>" + rpgs[i] + "</option>";
}*/

rpgs.forEach(function(el){
    //myString += "<option>" + el + "</option>";
    myString += `<option>${el}</option>`;
})

myString += "</select>";
myDiv.innerHTML = myString;

document.getElementById('getIt').addEventListener('click', function(){
    alert(document.getElementById('rpg').value);
})

/* Manipulating An Array */
//Add to an array
rpgs.push("Call of Cthulhu");
console.log(rpgs);

//Details aren't added to the dropdown as it was created before the additional element as pushed to the array.

//Get the last element in the array
var last = rpgs.length -1;
console.log(rpgs[last]);

//add an element to the beginning unshift
rpgs.unshift("Blades in the Dark");
console.log(rpgs);

//remove an element from the end
var aVar = rpgs.pop();
console.log(`${aVar}: ${rpgs}`);

//splice (index to start, number of elements to remove)
rpgs.splice(1,2); //removes 2 elements starting at and including position 1;
console.log(rpgs);