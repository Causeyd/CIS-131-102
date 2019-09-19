var rpgs = ["Anima", "Pathfinder", "Wild Talents", "Epithet System", "Shadowrun"];

myDiv = document.getElementById('Options');

myDiv.innerHTML = rpgs.length;

myString = "<select id ='rpg'>";

rpgs.forEach(function(el){
    //myString += "<option>" + el + "</option>";
    myString += `<option>${el}</option>`;
})

myString += "</select>";
myDiv.innerHTML = myString;

/********************* Form Validation *********************/

function valForm(frm)
{
    var isValid = true;
    if(frm.userName.value == "" || frm.emailAddress.value == "" || frm.phoneNumber.value == "")
    {
        document.getElementById('err').innerHTML = "Fields cannot be blank"
        if(frm.userName.value == ""){
            frm.userName.style.backgroundColor = "red"
        }
        if(frm.emailAddress.value == ""){
            frm.emailAddress.style.backgroundColor = "red"
        }
        if(frm.phoneNumber.value == ""){
            frm.phoneNumber.style.backgroundColor = "red"
        }
        isValid = false;
    }
/*    if (isValid)
    {
        frm.submit();
    }
*/
    return isValid;
}