var products = ["Anima", "Pathfinder", "Wild Talents", "Epithet System", "Shadowrun"];

products.forEach(function (el)
{
    var productSelection = document.createElement("option");
    productSelection.value = el;
    productSelection.innerHTML = el;
    document.getElementById('productSelection').appendChild(productSelection);
})

function valForm(frm)
{
    var userName = document.getElementById('userName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var defColor = "white"
    var errColor = "red"

    var isValid=true;
    //reset the background colors
    userName.style.backgroundColor = defColor;
    email.style.backgroundColor = defColor;
    phone.style.backgroundColor = defColor;


    //var nameTest = userName.match(/[A-Z][a-z]+\s[A-Z][a-z]/);

    //var emailTest = email.match(/\w+@\w+\.[com|net|edu]/);

    //var phoneTest = phone.match(/\d{3}[-.]\d{3}[.-]\d{4}/);

    var regexName =/[A-Z][a-z]+\s[A-Z][a-z]/;
    var regexEmail = /\w+@\w+\.[com|net|edu]/;
    var regexPhone = /\d{3}[-.]\d{3}[.-]\d{4}/;
    var validName = regexName.test(userName);
    var validEmail = regexEmail.test(email);
    var validPhone = regexPhone.test(phone);

    if (validName == false)
    {
       document.getElementById('userNameErr').innerHTML = "Invalid Name"
       userName.style.backgroundColor = errColor;
       isValid = false;
    }

    if (validEmail == false)
    {
       document.getElementById('emailErr').innerHTML = "Invalid Email"
       email.style.backgroundColor = errColor;
       isValid = false;
    }

    if (validPhone == false)
    {
       document.getElementById('phoneErr').innerHTML = "Invalid Phone"
       phone.style.backgroundColor = errColor;
       isValid = false;
    }
    

/*
    if (frm.userName.value == "")
    {
       document.getElementById('userNameErr').innerHTML = "Invalid Name"
       userName.style.backgroundColor = errColor;
       isValid = false;
    }

    if (frm.email.value == "")
    {
       document.getElementById('emailErr').innerHTML = "Invalid Email"
       email.style.backgroundColor = errColor;
       isValid = false;
    }

    if (frm.phone.value == "")
    {
       document.getElementById('phoneErr').innerHTML = "Invalid Phone"
       phone.style.backgroundColor = errColor;
       isValid = false;
    }
*/
    if (isValid)
    {
        frm.submit();
    }
}

function printQuery() {
    var url = window.location.search.substr(1);
    var pairs = url.split("&");

    pairs.forEach(function(el)
    {
        var keyValue = el.split("=")
        document.write(keyValue[0] +  ": " + keyValue[1] + "<br>")
    })

}
