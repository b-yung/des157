// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

//capture the submit event
document.f.onsubmit = processForm;
document.f.onsubmit = clearForm;

//define process function
function processForm() {

    //store user name in a variable
    var userName = document.f.userName.value;
    // alert('Hi ' + userName);

    //store userColor in a variable called userColor
    var userColor = document.f.userColor.value;
    //comment out the alert message above

    var myMsg = document.getElementById('myMsg');

    //if fields are not complete

    //if fields are complete

    //call a new alert() to concatenate a message with userName and userColor
    myMsg.innerHTML = 'Hi ' + userName + ', my favorite color is ' + userColor + ', too';

    my Msg.className = "show";

    //prevent page from reloading
    return false;

    function clearForm() {
        myMsg.className = "hide";
    }

}
});
