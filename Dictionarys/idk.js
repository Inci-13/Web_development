//-------------------------------------Dictonaries-----------------------------------------
//Dictonaries are used to store data. We can store muultiple data over here. But like in array we store the data only but here we store data as well as the meaning of that data. 
//Its like a real dictonary wher we have a word and the meaning of that word. The dictonary which we have in our coding also have data and the meaning of that data. 
//Dictonary : Data + meaning( it is also called as keys)
//Array : data
//syntax to create Dictonary : let dict={key:value, key1:value1, ....}
//meaning comes first and data comes later. We can store no limit data. {} 

//Benefit of storing key is we get to know the meaning of the data.

//----------------------------------------To get any data from dict we use key---------------------
//If we want to get any data we kust have to write its key.

var dictonar={
    "name":"Indzhi",
  "math_marks"  :100,
      "age"   :23
}

document.write(dictonar["name"] +"<br>")
document.write(dictonar["age"] + "<br>")

//------------------------------------------for in loop--------------------------------------------
//We want to get all data from dictonary then we use for in loop. Sometiems we have lot ofd data in our arrays and dictonary so to get adta we use fo iof loop and for in loop.

for(var i in dictonar){
  document.write(dictonar[i] + "<br>")
}
//---------------------------------------------Assignment-------------------------------
//create dictonary withe the nanme of dict and put keys name, class, marks, grade, email. give values for each of them.//
var dict={
  "name":"Inci", 
  "class":6,
  "marks":100, 
  "grade":"A",
  "email":"a@gmail.com"
}

//get 100
document.write(dict["marks"])