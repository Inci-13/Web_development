//--------------------------------------------variable---------------------------------
//variables are used to store values. We can store Strings(text), number, boolean values(True/False). Boolean defines two words whcih means yes(right) or wrong(no).
//Variables allow us to store three things/data. Strings are always written iun " " or '. Numbers and boolean values are never written into any "".allow
//We use three keywords to create variables :var, let, const

//syntax to create variable : var variablname=value;

//------------------------------------Rules to create variable name------------------
//1. One variable can only store one value.
//2. variablename always starts with alpahbets and not number. number comes only after alphabet eg : a1. we cannot write this as
//1a. 
//3. No special chracter liekm @, #, / etc nothing we use when we give variablename. _ we can use while create variablename.
//4. Vraiablename will never have space between them eg : first name this is wrong. firstname this is correct.#
//5. Give variablename according to what we are storing in it.#
//6. two variables can never have a same name.

//Example : create variable and store a name in it  and the print that on screen 

var name1='Inci';
document.write(name1 + '<br>');

//Example : create two varoable first anme and lastname and then join tehn using + sign
var first_name='Inci';
var last_name=' Katanani';
document.write(first_name+last_name+"<br>");

//Example : create two variables and store numbers in them and then add them up and print answer on screen
var no_1=5;
var no_2=5;
document.write(no_1+no_2 + "<br>");

//Example : use let keyword. create a variable and store age in that. then use + sign to join this variable with text " My age is" and print the answer on screen

let age=11;
document.write("My age is " + age + "<br>");

//------------------------------------------Difference between let, var, const-------------------------------
//let, var  stores values which can be changed later
//const stores value but cannot be changed later if we try changing it it shows error

let a=4;
//now let change
a=5;//chnaged it to 5
document.write(a + "<br>");

const b=7;
//b=10;//here we changed but it will show error as const does not allow to change
document.write(b + "<br>");

//---------------------------------------------Assignment--------------------------------------
//create two variables and store numbers in them. Then first minus and print answer, Then multiple and print. Divide and print. three times document.write() is used.
//create two variables name and sports  and store values in them. join them using + sign and print answer on screen.
let e=10;
let y=5;
document.write(e - y + "<br>");
document.write(e * y + "<br>");
document.write( e / y + "<br>");
var u="John";
var r="Football";
document.write(u + r + "<br>");