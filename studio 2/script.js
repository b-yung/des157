// JavaScript Document
console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    //capture the submit event
    document.f.onsubmit = processForm;
    document.f.onreset = clearForm;

    //define process function
    function processForm() {

        //store names in variables
        var userName = document.f.userName.value;

        var num1 = document.f.num1.value;

        var letter = document.f.letter.value;

        var noun1 = document.f.noun1.value;

        var prod1 = document.f.prod1.value;

        var adj1 = document.f.adj1.value;

        var action = document.f.action.value;

        var num2 = document.f.num2.value;

        var org = document.f.org.value;

        var dollname = document.f.dollname.value;

        var noun2 = document.f.noun2.value;

        var myMsg = document.getElementById('myMsg');


        myMsg.innerHTML = 'By ' + userName + "<br />" + 'What Can I Say About this ' + num1 + letter + ' ' + noun1 + 'Slicer that has not already been said about the wheel, penicillin, or the i' + prod1 + '... this is one of the greatest inventions of all time. My husband and I would argue constantly over who had to cut the ' +  noun1 + 'slices. It is one of those chores NO ONE wants to do! You know, the old "I spent the entire day ' +  action + 'ing OUR children, maybe YOU can pitch in a little and cut these' + noun1 + 's?" and of course, "You think I have the energy to slave over your ' + adj1 + ' ' + noun1 + 's? I worked a ' + num2 + 'hour shift just to come home to THIS?!" These are the things that can destroy an entire relationship. It got to the point where our children could sense the tension. The minute I heard our 6-year-old ' + org + ' in her bedroom, re-enacting our daily ' + noun1 +
        ' fight with her '+ dollname + ' dolls, I knew we had to make a change. That is when I found the ' + num1 + letter + ' ' + noun1 + 'Slicer. Our marriage has never been healthier, AND we have even incorporated it into our ' + noun2 + 'making.'
        'THANKS ' + num1 + letter + ' ' + noun1 + 'SLICER!'

        ;
        myMsg.className = "show";
    /*
        if (userName = "" || userColor = "") {
            alert('please fill out!');
        } else {
            myMsg.className = "show";
            myMsg.innerHTML = 'Hi ' + userName + ' I also like ' + userColor;

        }
  */
        //prevent page from reloading
        return false;

    }

    //clear form
    function clearForm() {
        myMsg.className = "hide";
    }

});
