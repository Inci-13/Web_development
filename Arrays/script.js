//--------------------------------Arrays-------------------------------------------
//Arrays means a list where we can store lot of data. Variable wil not be able to store lot of data at the same time. but in arrays
// we can stoe lot of data at the same time.

//syntax to create array are : var arrayname=[data1, data2, data3, data4, data5, data6............]
//Note : we can put as much as data we can in array. we can put string, boolean, number. Every data has index value. 
//To get data  : we use position number or index value. Every data by default has a position number that is staring from 0, 1, .. so on
//which means data which comes first has 0 index value and data whcih come second has 1 index value and data which comes third has 2 position and so on....

//Example :

var arr=[23, 24, 100, 200, "Hi", true, "Ri"]//0, 1, 2,3 , 4, 5, 6

//print whole array 
document.write(arr + "<br>")

//Reason to have index value: If we want to have use only one or two or may be data then w ecan write tehre position number and get them

//get hi
document.write(arr[4]+"<br>")

//get true
document.write(arr[5]+"<br>")

//create an array of 7 fruits and print the fruit whch is on position number 6

var fruits=["pineapple", "apple", "pear", "strawberry", "banana", "dragonfruit", "mango", "pomegranite"]
document.write(fruits[6]+"<br>")
//-------------------------------------for of loop--------------------------------
//for of loop is used to get all data from array which we can use it to do whatever we want. Here we create one variable who goes inside array  and gets one by one all data.
//syntax to use for of loop : for (var i of arrayname){}

for(var i of fruits) {// i variable goes inside array fruits  and get all data and print it on screen
  document.write(i+ " ");

}

//---------------------------------Assignment-----------------------------------
//create an array of sports and store all different sports. apply for of loop and print all sports.
//create an array of vegetables and have difefrent vegetables in it. Print only 3 position vegetable .
var sports=["Basketball", "Football", "Tennis" ,"Rugby", "Judo", "Gymnastics", "Swimming", "Cricket"]
for(var b of sports){
  document.write(b + "<br>")
}
var vegetables=["Lettuce", "Cucumber", "Califlower", "Mushroom", "Pepper", "Potato", "Broccoli", "Pumpkin"]
document.write(vegetables[3]+ "<br>")

//------------------------------------Array Functions----------------------------------
//1. Length. It is used to find the size of the screen//
let a=vegetables.length
document.write(a + "<br>")
//2. Push. Push is used to add the data inside the array//
vegetables.push("Cabbage")
document.write(vegetables + "<br>")
//3. Pop. Pop ("is used to delete the data from the array//
vegetables.pop("")
document.write(vegetables + "<br>")
//4. Shift and unshift. These are also used to add or delete the data from the array but from the beggining//
vegetables.shift()
// It will delete lettuce from the beggining//
document.write(vegetables + "<br>")
vegetables.unshift("Lime")
document.write(vegetables + "<br>")
// Inserting at a specific position.//
vegetables[1]="Apple"
document.write(vegetables + "<br>")
//5. Sort is used to sort the data alphabetically or in number order. Sort only works if it has only strings or only numbers.//
vegetables.sort()
document.write(vegetables)
vegetables.reverse()
document.write(vegetables + "<br>")