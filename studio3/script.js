// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // add event listeners
    //var original = document.getElementById('original');
    var tag = document.getElementById('tag');
    console.log(tag);
    var vandal = document.getElementById('vandal');
    var punch = document.getElementById('punch');
    var bad = document.getElementById('bad');
    var marvels = document.getElementById('marvels');
    var gb = document.getElementById('gb');



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

    vandal.addEventListener('mouseout', function() {
        console.log('mouseout, vandal b&w');
        vandal.src = "img/bw/vandal-bw.png";
    });

    // ***************************************************************
    // change punch color
    punch.addEventListener('mouseover', function() {
        console.log('mouseover, change color');
        punch.src = "img/bw/punch.png"
    });

    punch.addEventListener('mouseout', function() {
        console.log('mouseout, punch b&w');
        punch.src = "img/bw/punch-bw.png";
    });

    // ***************************************************************
    // change bad color
    bad.addEventListener('mouseover', function() {
        console.log('mouseover, change color');
        bad.src = "img/bw/bad.png"
    });

    bad.addEventListener('mouseout', function() {
        console.log('mouseout, bad b&w');
        bad.src = "img/bw/bad-bw.png";
    });

    // ***************************************************************
    // change marvels color
    marvels.addEventListener('mouseover', function() {
        console.log('mouseover, change color');
        marvels.src = "img/bw/marvels.png"
    });

    marvels.addEventListener('mouseout', function() {
        console.log('mouseout, marvels b&w');
        marvels.src = "img/bw/marvel-bw.png";
    });

    // ***************************************************************
    // change gb color
    gb.addEventListener('mouseover', function() {
        console.log('mouseover, change color');
        gb.src = "img/bw/gb.png"
    });

    gb.addEventListener('mouseout', function() {
        console.log('mouseout, gb b&w');
        gb.src = "img/bw/gb-bw.png";
    });

});
/*
    tag.addEventListener('mouseout', function() {
        console.log('mouseout, tag b&w');
        tag.src = 'img/tag_bw.png';
        tag_txt.style.display = "none";
    }); */
