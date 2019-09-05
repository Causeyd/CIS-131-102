function myGreeting(myName="Daniel"){
    var myAppName = "index";

    //document.write("<h2>Greetings " + myName + " from " + myAppName + "</h2>");
    myName = document.getElementById('yourName').value;
    var aString = "<h2>Greetings " + myName + " from " + myAppName + "</h2>";
    document.getElementById('Greeting').innerHTML = aString;
}