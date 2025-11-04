//----------------------------Functions-----------------------------------
//Functions means to do something. 
//Two types of function are :
//1. Inbuilt functions : Thesev are thoe functions which are already there inside javscript and they do some task for us.a
// function has one word and () with that. eg : prompt(), document.write(), documnet.getElementById(), 
//window.alert()etc.a
//User defined functions : These are functions created by user. 
//Reason to create our own function:
//1. I am looking for a function but taht is not there in javascript so wecan create own function.
//2. This allows us to store the code no matter whatveer lines of cdoe are there we are able to store. 
//3. So if i want to sue same code whcih stored 3 times we do not ahve to copy paste rather wecan just write the function name. this not only save stimes but also makes code shorter.
// Reusing teh same code agian by calling teh function.

//syntax to craete function : function functioname(){block of code}
//syntax to call function : functioname()

//craete a function even and inside do coding of check if given number is even or odd 

function even(){
    //Here we scan do any code if then else, variables, loops arrays, dictonaries etc..
    var a=3;
    if(a%2==0){//% modulus sign divides two numbers  and gives answer as remainder if remiander is zro ites even. if not zero its odd.
   document.write("its an even number")
    }
     else{
        document.write("its an odd number")
     }
}
//In order to copy code three times call the function name three
even()
even()
even()

//create a function with name student and inside
//use for loop on array to print all marks after that call the function
function student(){
   var marks=[12, 23, 100, 2, 23]
   for(var i of marks){
    document.write(i)
   }
}
student()
//craete a functio with name of school. Inside that create an array with name of student names
// and use for of loop to display each one of the name and later call the function
function school(){
    var names=["Felicia", "Patricia", "Gerald", "George", "Stacey", "Larry", "Gary", "Barbara", ]
    
    for(var i of names){
        document.write(i)       
    }
}

//create an function with the name of sports. inside that create a dictonary, place different sports 
//names in that with every coubtry its popular. call te function

function sports(){
    var dicton1={
        "america":'Rugby',
        "India":"cricket",
        "Europe": 'football',
        "Africa":"polo",
        "pakistan":"Badminton"
    }
}

sports()

//--------------------------------Assignment------------------------
//create a program to create a function greater. Inside that craete vraiable and store number in that.
//check if number is gretare than 10 then print its greater else print its smaller. call the function later.
//craete a function with the name hello. craete a variable name and store any name in it. print the name. Later call the functionname.
function greater(){
    var variable=1
  if (variable>10){
    document.write("It's greater.")
  }
    else{
        document.write("It's smaller.")
  }
}
greater()
function hello(){
    var George
    document.write(George)
}
hello()