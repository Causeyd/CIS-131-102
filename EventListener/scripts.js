document.getElementById('clippy').addEventListener('click', doSomething);

//anonymous function
document.getElementById('newAnon').addEventListener('dblclick', function (){
    alert("Stop touching me!");
});

function myGreeting (firstName){
    document.getElementById('Greet').innerHTML = "Hello" + firstName;
}

function doSomething() {
    alert("Clippy is displeased!")
}

function theobj(anObject){
    alert(anObject.innerHTML);
}