//---------------------------Strings---------------------

//Strings are the alphebets, numbers, special chrcater written in " ". 
//Similar to arrays Strings also have index value which means position number given to each and every character in String
//This begins from 0, 1,2.. and so on....

var a="Hello my name is inci and i am having a pet duck in my bag"

//get i from inci: count at which position it is start from 0, spaces are also counted
document.write(a[17])

//-------------------------String Functions---------------------------
//1. length : is used to find the size of the string//

var b=a.length
document.write(b +"<br>");

//2. concat(): It is used to join two text together.a

var c=a.concat("hello")
document.write(c+"<br>")

//3. toUpperCase() : It is used to convert text into capital letters
var up=a.toUpperCase()
document.write(up+"<br>")
// 4. toLowerCase() :It is use to cnvert to small letters
var lower=a.toLowerCase()
document.write(lower+"<br>")

//5. replace() : replace is used to replace the word from the sentence
var repl=a.replace("duck", "cat")  
document.write(repl+"<br>")

//6. includes() : serach for a word
var includ=a.includes("inci")
document.write(includ+"<br>")//true if it is there and false if it is not there

//7. slice() : slice is used to cut or delete some text from string
var slic=a.slice(9, 13)//first number is to delte, second number is show how many alpahbets will come after
document.write(slic+"<br>")

//8. split() : split on commas, split on space.

//---------------------Assignment----------------------------------
//create an array and store name of different countries and with help of for of loop print on screen.
//create a program in whihc first take input form user using prompt() that will be a number. check if number is greater than 10 then print you are doing good else print you are not doing god.
//create a program on which print hello 20 times on screen using for loop. start point is 1 and end is 20.

var countris=["Turkey", "England", "Ukraine", "Vietnam", "Nigeria", "Brazil", "Portugal"]
for(var i of countris){
    document.write(i + "<br>")
}
var k=parseInt(prompt("Enter your number."))
if(k>10){
    document.write("You are doing good." + "<br>")
}
else{
    document.write("You are not doing good." + "<br>")
}
for(var j=1;j<=20;j++){
    document.write(j + "<br>")
}