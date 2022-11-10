let text='Hello'; //string
let number = 2013; //number
let name; //undefined
const bigint = 1234567890123456789012345678901234567890n; //bigint
let sym = Symbol.for("password"); //symbol
let user = {
    name: "Elmurod",
    age: 36
  };
alert(text);
alert(number);
alert(bigint);
var x = 7; //boolean
if(x == 7)
  alert("Значение переменной x равно 7");
else
  alert("Значение переменной x не равно 7");
alert(name);
alert( Symbol.keyFor(sym) ); //symbol
let key = prompt("Что вы хотите узнать о пользователе?", "name");
alert( user[key] );
