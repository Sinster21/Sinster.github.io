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

/* Get th modal */
var modal = document.getElementById("myModal");

// Get the image and insert it insie modal while using the alt text as caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};

// gets the <span> element that closes the modal */
var span = document.getElementsByClassName("close")[0];

// When user clicks on <span> (x) it close the modal */
span.click = function() {
    modal.style.display = "none";
}; 