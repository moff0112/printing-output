//Task 1

var a = 3;
var b = 5
var c;

alert("var a = 3;\nvar b = 5;\nvar c;\n----------------\n\n" +
    "a + b = " + (a + b) + "\n" +
    "a - b = " + (a - b) + "\n" +
    "a * b = " + (a * b) + "\n" +
    "a / b = " + (a / b) + "\n" +
    "a % b = " + (a % b) + "\n" +
    "a += b = " + (a += b) + "\n" +
    "a -= b = " + (a -= b) + "\n" +
    "a *= b = " + (a *= b) + "\n" +
    "a /= b = " + (a /= b) + "\n" +
    "a %= b = " + (a %= b) + "\n" +
    "a == b = " + (a == b) + "\n" +
    "a != b = " + (a != b) + "\n" +
    "a > b = " + (a > b) + "\n" +
    "a < b = " + (a < b) + "\n" +
    "!a && !c = " + (!a && !c) + "\n");

//Task 2


var first_name = "Jordan";
var last_name = "Moffatt";
var email = "moff0112@algonquinlive.com";
var output

output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";

alert(output);

//Task 3

var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100)
];

var sum = numbers[0] + " + " + numbers[4] + " = " + (numbers[0] + numbers[4])

alert(sum);
