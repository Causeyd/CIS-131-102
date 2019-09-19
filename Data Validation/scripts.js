/*
var timer = setInterval(runTimer, 500);

function runTimer(){
    document.getElementById('theTimer').innerHTML = Math.floor(Math.random()*100000);
}
*/

var isValid = true;

function valForm(frm)
{
    if(frm.userName.value == "")
    {
        document.getElementById('err').innerHTML = "Cannot be blank"
        frm.userName.style.backgroundColor = "red"
        isValid = false;
    }
/*    if (isValid)
    {
        frm.submit();
    }
*/
    return isValid;
}

function printQuery()
{
    var query = window.location.search.substring(1);
    var valPairs = query.split("&");
    for (var i = 0; i < valPairs.length; i++)
    {
        var pair = valPairs[i].split("=")
        document.write(`${pair[0]} gets ${pair[1]}<br>`)
    }
}