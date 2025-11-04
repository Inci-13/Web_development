// This function is called when a button is clicked to append the value to the input field
function press(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression when "=" is pressed
function equal() {
    let expression = document.getElementById("result").value;
    try {
        let result = eval(expression);  // Use eval to calculate the result
        document.getElementById("result").value = result;
    } catch (e) {
        document.getElementById("result").value = 'Error';  // Display error if expression is invalid
    }
}

// This function clears the input field when "C" or "CE" is pressed
function clearResult() {
    document.getElementById("result").value = '';
}
function cut(){
    cv=document.getElementById("result").value
    document.getElementById("result").value=cv.slice(0,-1)
}