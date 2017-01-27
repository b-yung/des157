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
    myMsg.innerHTML = 'What Can I Say About this 571B ' + noun1 Slicer + that hasn't already been said about the wheel, penicillin, or the iPhone... this is one of the greatest inventions of all time.

    My husband and I would ague constantly over who had to cut the day's noun1 slices.

    It's one of those chores NO ONE wants to do! You know, the old "I spent the entire day rearing OUR children, maybe YOU can pitch in a little and cut these noun1s?"

    and of course, "You think I have the energy to slave over your damn noun1s? I worked a 12 hour shift just to come home to THIS?!"

    These are the things that can destroy an entire relationship. It got to the point where our children could sense the tension.

    The minute I heard our 6-year-old girl in her bedroom, re-enacting our daily noun1 fight with her Barbie dolls, I knew we had to make a change.

    That's when I found the 571B noun1 Slicer.

    Our marriage has never been healthier,

    AND we've even incorporated it into our lovemaking.

    THANKS 571B noun1 SLICER! '





    my Msg.className = "show";

    //prevent page from reloading
    return false;

    function clearForm() {
        myMsg.className = "hide";
    }

}
});
