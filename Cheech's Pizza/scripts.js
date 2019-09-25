var Pizzas = ["Macaroni and Cheese", "Meat Lovers", "Vegetable", "Supreme", "Neopolitan"];
//var PizzaPic = ["Macaroni.jpg", "Meat.jpg", "Veggie.jpg", "Supreme.jpg", "Neopolitan.jpg"];
var PizzaCost = [12.5, 14, 12.75, 16, 10.5];
var quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var last1 = Pizzas.length - 1;
var last2 = quantity.length - 1;

/*
var userName = document.getElementById('userName');
var email = document.getElementById('emailAddress');
var phone = document.getElementById('phoneNumber');
var defColor = "white"
var errColor = "red"
var isValid = true;
var regexName = /[A-Z][a-z]+\s[A-Z][a-z]+/;
var regexEmail = /\w+@\w+\.[com|net|edu]+/;
var regexPhone = /\d{3}[-.]\d{3}[.-]\d{4}/;
var validName = regexName.test(userName);
var validEmail = regexEmail.test(email);
var validPhone = regexPhone.test(phone);
*/

Pizzas.forEach(function(el) {
  var pizzaSelection = document.createElement("option");
  pizzaSelection.value = el;
  pizzaSelection.innerHTML = el;
  document.getElementById('pizzaSelection').appendChild(pizzaSelection);
})

quantity.forEach(function(el) {
  var quantitySelection = document.createElement("option");
  quantitySelection.value = el;
  quantitySelection.innerHTML = el;
  document.getElementById('quantitySelection').appendChild(quantitySelection);
})



function valForm(frm) {
  var userName = document.getElementById('userName');
  var email = document.getElementById('emailAddress');
  var phone = document.getElementById('phoneNumber');
  var defColor = "white"
  var errColor = "red"

  var isValid = true;

  //reset the background colors
  userName.style.backgroundColor = defColor;
  email.style.backgroundColor = defColor;
  phone.style.backgroundColor = defColor;

  //Regex code
  /*
  var regexName = /[A-Z][a-z]+\s[A-Z][a-z]+/;
  var regexEmail = /\w+@\w+\.[com|net|edu]+/;
  var regexPhone = /\d{3}[-.]\d{3}[.-]\d{4}/;
  var validName = regexName.test(userName);
  var validEmail = regexEmail.test(email);
  var validPhone = regexPhone.test(phone);

  if (validName == false) {
    document.getElementById('userNameErr').innerHTML = "Invalid Name"
    userName.style.backgroundColor = errColor;
    isValid = false;
  }

  if (validEmail == false) {
    document.getElementById('emailErr').innerHTML = "Invalid Email"
    email.style.backgroundColor = errColor;
    isValid = false;
  }

  if (validPhone == false) {
    document.getElementById('phoneErr').innerHTML = "Invalid Phone"
    phone.style.backgroundColor = errColor;
    isValid = false;
  }
  */

  if (isValid) {
    frm.submit();
  }
}

/*
switch (Pizzas[]) {
  case [0]:
  document.getElementById('pizzaChoice').src=PizzaPic[0];
    break;
  case [1]:
  document.getElementById('pizzaChoice').src=PizzaPic[1];
    break;
  case [2]:
  document.getElementById('pizzaChoice').src=PizzaPic[2];
    break;
  case [3]:
  document.getElementById('pizzaChoice').src=PizzaPic[3];
    break;
  case [4]:
  document.getElementById('pizzaChoice').src=PizzaPic[4];
    break;
  default:

}
*/
