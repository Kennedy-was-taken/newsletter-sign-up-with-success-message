const confirmationmessagecontainer = document.getElementById("confirmationmessagecontainer");
const form = document.getElementById("newsletterform");
const emailaddress = document.getElementById("emailaddress");
const emailaddressplacement = document.getElementById("emailladressplacement");
const confirmationmessagebuttonclose = document.getElementById("confirmationmessagebuttonclose");

// Hide confirmation container initially
confirmationmessagecontainer.style.display = "none";

// When the form is submitted (only fires if email is filled & valid!)
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload
    var input = emailaddress.value;
    // Put email into confirmation popup
    emailaddressplacement.textContent = input;
    // Hide the form and show the popup
    form.style.display = "none";
    confirmationmessagecontainer.style.display = "flex";
});

// Dismiss popup and reset
confirmationmessagebuttonclose.addEventListener("click", function() {
    confirmationmessagecontainer.style.display = "none";
    form.style.display = "block";
    emailaddress.value = ""; // Clear input for next time
});

// remove the error while typing
emailaddress.addEventListener("input", function () {

    emailaddress.classList.remove("error");
    confirmationmessagecontainer.classList.remove("active");

});

//confirmationmessagecontainer
//emailaddress
//emailaddressplacement
//submitbutton
//confirmationmessagecontainer
//confirmationmessagebuttonclose