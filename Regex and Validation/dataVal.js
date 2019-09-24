var newStr = "My name is Stitch - Rambo was touch to watch";
//console.log(newStr.length);
//console.log(newStr.charAt(5));

for (var i = 0; i < newStr.length; i++)
{
    console.log(newStr.charAt(i));
}

//Three use cases

//Validation
var phoneNumber ="417-447-8297";
var regex = /\d{3}[-.]\d{3}[.-]\d{4}/
var isValid = regex.test(phoneNumber);
console.log(isValid);

//Extraction
var address = "1001 N Chestnut Expressway, Springfield, MO 65872";
var nameTest = address.match(/[A-Z]+\s\d{5}$/g);
console.log(nameTest);



//Replace
var name = "Kirsten does Javascript, aloha kirsten";
// /i makes it Case Insensitive and /g makes it global rather than only having it affect the first occurence.
var replaceIt = name.replace(/kirsten/gi,"Stitch");
console.log(replaceIt);