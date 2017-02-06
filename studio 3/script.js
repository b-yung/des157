// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // add event listeners
    //var original = document.getElementById('original');
    var tag = document.getElementById('tag');
    var vandal = document.getElementById('vandal');
    var punch = document.getElementById('punch');
    var bad = document.getElementById('bad');
    var marvel = document.getElementById('marvel');
    var gb = document.getElementById('gb');
*/


    // ***************************************************************
    // change tag color

    // add an eventListener for mouseover that changes the src of the
    // tag image to the image titled "tag.png"
    /*tag.addEventListener('mouseover', function() {
        console.log('mouseover, change color');
        tag.src = "img/bw/tag.png"
    });*/

    vandal.addEventListener('mouseover', function() {
        console.log('mouseover, change color');
        vandal.src = "img/bw/vandal.png"
    });


          });
/*
    tag.addEventListener('mouseout', function() {
        console.log('mouseout, tag b&w');
        tag.src = 'img/tag_bw.png';
        tag_txt.style.display = "none";
    }); */
