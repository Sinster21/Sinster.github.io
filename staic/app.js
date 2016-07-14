// A propmt pops up and you enter name
var person = prompt("Please enter you name.");
    if (person != null) {
     document.getElementById("demo").innerHTML =
     "You name is " + person + ", Welcome to hello world!!!!";
}
// A promt pops up asking for your day
var day = prompt("How was your day today.");
    if (day != null) {
        document.getElementById("day").innerHTML = 
        " I'm glad that your " + day + " was like a story " + person;
}
//makes the generated box and text alert
var message = document.getElementById("message");
document.getElementById("myButton").addEventListener("click", function() {
    alert( message.value );
});