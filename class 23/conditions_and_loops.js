//----------------------------------Operators-------------------------------------
//1. Arthmetic operator : +, -, *, /(divide tow numbers but answer gives is quotient), %(modolus) : means this is used to divide two number and answer gives is remainder.
//2. Assignment operator : Assignning a value to a variable by adding, subtracting, multiplying, dividing a number to a already
//existing variable. +=, -=, *=, /=, %=
//eg
let a=3;
//now add 4 to a or assign 4 to a by adding it
//Note : let, var, const are written only when variable is created in the beginning. Later when we use or change we do not write.

document.writeln(a + "<br>")

a+=4  // a=a+4
//no 4 is added to a variable. we know a already has 3 inside that when 4 is added to it it becomes 7
document.writeln(a + "<br>")//prints 7

document.writeln(a + "<br>")

//2 is subtracted from a. 2 is subtracted from 7 as a is having 7 inside that.
a-=2 // a=a-2
document.writeln(a + "<br>")

var b=100
b*=12 // b=b*12 = 1200
document.writeln(b + "<br>")

//3. comparison operator : >, <, ==(equal sign. This is given when we want to say if two things are equal. when we want to store right on left side then we use = euqla sign), !=(not euqal), <=, >=

var c=4
var d=9
document.writeln((c>=9) + "<br>")// <= means either number will be less than or will be equal to second number then answer will be true. but if neither thing happens
// that means neither first number is less than or equal to second number than it false

//The answer will be false
document.writeln((c!=d) + "<br>")
document.writeln((c==d) + "<br>")

//4. Increament/ decreament operator : ++(increases by 1), --(decreases by 1). used on variable.

var e=10
e++
document.writeln(e + "<br>") 
e--
document.writeln(e + "<br>")

//5. Logical operator : ||(Or)(or means either of two conditios should happen so answer is true. if none then answer is false), &&(and)(both conbdition should be possible then answer is true else false), !(not)
var marks1=100
var marks2=200

document.writeln(marks1<marks2 || marks1>marks2)//true
document.writeln("<br>")
document.writeln(marks1<marks2 && marks1>marks2 + "<br>")//false

//----------------------------------------------Conditions-----------------------------------------
//Conditions where one condition happens after if and then another thing happens.
//syntax for condition : if(condition) {
//then part
//} else {
 //next part
//}
//Mutiple conditions :
//syntax :
//if(condition) {
//next part
//}
//else if(condition) {
//next part
//}
//else(condition) {
//next part
//}



//Example 1 : create one variable and store number in that. check if number is greater than 10  then print its greater else print its smaller
document.writeln("<br>")
var numbers=-3

 if(numbers>=10) {
     document.writeln("it is greater" + "<br>")
 }
  else {
     document.write("its less than" + "<br>")
 }

 //---------------------------------------Input form user--------------------------------------------
 //We can use prompt() to take input for user menas to ask question from user. We can use this in variable so that answer given by user is stored ibn variab;'e
 //var a=prompt("Enter your name"). prompt always take inout as txt. that means if we take any number too here it will be always a text not integer. so when you are going to d any mathematical thing on prompt always convert it into integer using parseInt()

 //Example 2 : create a vraible and ask his favourite subject using prompt. Then apply if then check if subject is equal to math then print its math else print its science

//  var subject=prompt("Enter your favourite subject: math or science?")
//  if(subject=="math"){
//     document.write("it is math" + "<br>");
//   }
//    else {
//    document.write("its science"+"<br>")
//    }


  //Example 3: Create a variable and store maps in it, check if the marks are greater than 90 and the maps is less than 100 then print you score good. Else, you score bad.//
  var idk=50;
 if(idk > 90 && idk < 100){
 document.write("You score good"+"<br>")
 }else{
document.write("You score bad"+"<br>")
 }

  //Example 4 : create a vriable and ask user his marks. check if marks are between 90 to 100 the print its gardeA, else if marks are between 80 to 90 the  pribnt grade B else print garde C

var marks=parseInt(prompt("Enter your marks"))

  if(marks>90 && marks<=100){
   document.write("grade A" + "<br>")
  }
   else if(marks>80 && marks<90){
    document.write("grade B" +"<br>")
    }else{
     document.write("grade C" +"<br>")
  }


   //--------------------------------------------------Assignment----------------------------------
   //create  a variable and ask user his age using prompt. Also convert using parseInt. 
   // if age is gretare than 18 the  print your eligible to drive else print you are not 
   // eligible to drive
   document.writeln("<br>")
   var age=prompt("Enter your age: ")
   age=parseInt(age)
   if(age>18){
    document.writeln("You are eligible to drive");
   }else{
    document.writeln("YOUR TOO YOUNG AND DUMB")
   }

document.writeln("<br>")
   var name=prompt("Enter your name: ") // John
   if(name == "Inci"){
    document.writeln("Your name is Inci" + "<br>")
   }else{
    document.writeln("Your name is " + name + "<br>")
   }


   //craete a variable and store your name in that using prompt. dont use parseInt() here. 
   // if name is equal to Inci the print its Inci  else its INCI ITS SPELLED INCIIIII//
  ///  var age=parseInt(prompt("How old are you?"))
  ///  if(age>18){
  ///   document.write("You are elligible to drive."+"<br>")
  ///  }else{
  ///   document.write("You are not elligible to drive."+"<br>")
  ///  }
  ///  var namee=prompt("Inci")
  ///  if(namee=="Inci"){
  ///   document.write("Your name is Inci."+"<br>")
  ///  }else if(namee=="Gerald"){
  ///   document.write("Hi Gerald, who named you?"+"<br>")
  ///  }else{
  ///   document.write("Hi, Inci or Gerald choose a name."+"<br>")
  ///  }