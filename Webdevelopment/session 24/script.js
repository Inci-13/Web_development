//-----------------------------Loops---------------------------------
//Loops are used to repeat the code. 
//4 Important things in loop are :
//1. Start point when loop will begin : create  a vraiable and store start value in that like 0, 1, 2, 3, 4, and so on.
//2. Ending point : wheb loop ends : we give this by condition : a<=20mmeans till the times a is less tjan equal to 20 the loop goes on a soon as it crosses 20 the loop stops.
//3. Code to repeat. Inside loop tell what the code is that needs ti repeat again n agin. like print 10 hi. we need to sue document.write("Hi")
//4. increament or decrement : increase by 1, 2, 3and so on and decreasing by 1, 2, 3 and so on. this is important to do if we want code to keep on going and reach till the end.20mmeans

//Different types of loops are :
//1. While loop : while loop is similar to while in mit app inventor and repeat until in scratch. Here we give how many times we need to repeat the code. Sometimes we can create an infinite loop as well which will never
//stop. Also we can make code repeat till some condition eg : code will repeately move the player unless it touhcing the wall..20mmeans
//3 situations : specfic no of times, infinite and condition..
//syntax to use while loop
//var variablename=1
//while(a<=10) {
//code we need to repeat
//increament
//}
//Example 1 :
//print all numbers divisible by 11 till 10
var s=11
while(s<=100)
{
    //code to repeat
    document.write(s);
    s+=11
}

//Example 2 : print hi 30 times using while loop
var z=1
while(z<=30)
{
    document.write("Hi"+"<br>");
    z+=1
}

//Example 3 : print all numbers divisible by 43 till 100

var t=43
while(t<=100)
{
    document.write(t+"<br>")
    t+=43
}
//2. for loop : for loop is used to repeat the code. We can make it do same thing again for specfic number of times or infinite times. but the condition one is not supported. also there is a benefit of using this loop everything is given in one line.
//Note : Both while loop and for loop uses all 4 things.
//syntax to use for loop :
//for(var i=0;i<=100;i++){
//code to repeat
//}
//3. for-of loop
//4. for-in-loop:

//Example : print hi 30 times

for(var s=0;s<=30;s++){
document.write("Hi")    
}

//-----------------------------------------Assignment-------------------------------------------
//print all even numbers on screen till 60
//print all odd numbers on screen till 60
//print hello 100 times
var h=2
for(var h=2;h <=60;h+=2){
    document.write(h)
}
for (let h=1;h<=60;h+=2){
    document.write(h)
  }
  var g=0
  for (var g=1;g<=100;g++) {
    document.write("Hello" + "<br>");
  }