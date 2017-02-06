// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var tag = document.getElementById("tag");
    var vandal = document.getElementById("vandal");
    var punch = document.getElementById("punch");
    var bad = document.getElementById("bad");
    var marvels = document.getElementById("marvels");
    var gb = document.getElementById("gb");


    var tagAnswer = document.getElementById("tagAnswer");
    var vandalAnswer = document.getElementById("vandalAnswer");
    var punchAnswer = document.getElementById("punchAnswer");
    var badAnswer = document.getElementById("badAnswer");
    var marvelAnswer = document.getElementById("marvelAnswer");
    var gbAnswer = document.getElementById("gbAnswer");

    var close1=document.getElementById("close1");
    var close2=document.getElementById("close2");
	  var close3=document.getElementById("close3");
	  var close4=document.getElementById("close4");
    var close5=document.getElementById("close5");
	  var close6=document.getElementById("close6");

    var answer = document.getElementsByClassName("answer");
    var close = document.getElementsByClassName("close");

    /*
    var answers = [tagAnswer, vandalAnswer, punchAnswer, badAnswer, marvelAnswer, gbAnswer];
    var imgs = [tag, vandal, punch, bad, marvels, gb];
    */


    // -----------------------------------------------------
    // change tag color
    tag.addEventListener("mouseover", function() {
        console.log("mouseover, change color");
        tag.src = "img/bw/tag.png";
    });

    tag.addEventListener("mouseout", function() {
        console.log("mouseout, tag b&w");
        tag.src = "img/bw/tag-bw.png";
    });

    tag.addEventListener("click", function() {
        console.log("tag clicked");
        tagAnswer.style.display = "block";
        document.getElementById("tagAnswer").className = "answer";
    });

    close1.addEventListener("click", function() {
        tagAnswer.style.display = "none";
    })

    // -----------------------------------------------------
    // change vandal color
    vandal.addEventListener("mouseover", function() {
        console.log("mouseover, change color");
        vandal.src = "img/bw/vandal.png";
    });

    vandal.addEventListener("mouseout", function() {
        console.log("mouseout, vandal b&w");
        vandal.src = "img/bw/vandal-bw.png";
    });

    vandal.addEventListener("click", function() {
        console.log("vandal clicked");
        vandalAnswer.style.display = "block";
        document.getElementById("vandalAnswer").className = "answer";
    });

    close2.addEventListener("click", function() {
        vandalAnswer.style.display = "none";
    })

    // -----------------------------------------------------
    // change punch color
    punch.addEventListener("mouseover", function() {
        console.log("mouseover, change color");
        punch.src = "img/bw/punch.png";
    });

    punch.addEventListener("mouseout", function() {
        console.log("mouseout, punch b&w");
        punch.src = "img/bw/punch-bw.png";
    });

    punch.addEventListener("click", function() {
        console.log("punch clicked");
        punchAnswer.style.display = "block";
        document.getElementById("punchAnswer").className = "answer";
    });

    close3.addEventListener("click", function() {
        punchAnswer.style.display = "none";
    })

    // -----------------------------------------------------
    // change bad color
    bad.addEventListener("mouseover", function() {
        console.log("mouseover, change color");
        bad.src = "img/bw/bad.png";
    });

    bad.addEventListener("mouseout", function() {
        console.log("mouseout, bad b&w");
        bad.src = "img/bw/bad-bw.png";
    });

    bad.addEventListener("click", function() {
        console.log("bad clicked");
        badAnswer.style.display = "block";
        document.getElementById("badAnswer").className = "answer";
    });

    close4.addEventListener("click", function() {
        badAnswer.style.display = "none";
    })
    // -----------------------------------------------------
    // change marvels color
    marvels.addEventListener("mouseover", function() {
        console.log("mouseover, change color");
        marvels.src = "img/bw/marvels.png";
    });

    marvels.addEventListener("mouseout", function() {
        console.log("mouseout, marvels b&w");
        marvels.src = "img/bw/marvel-bw.png";
    });

    marvels.addEventListener("click", function() {
        console.log("marvels clicked");
        marvelAnswer.style.display = "block";
        document.getElementById("marvelAnswer").className = "answer";
    });

    close5.addEventListener("click", function() {
        marvelAnswer.style.display = "none";
    })

    // -----------------------------------------------------
    // change gb color
    gb.addEventListener("mouseover", function() {
        console.log("mouseover, change color");
        gb.src = "img/bw/gb.png";
    });

    gb.addEventListener("mouseout", function() {
        console.log("mouseout, gb b&w");
        gb.src = "img/bw/gb-bw.png";
    });

    gb.addEventListener("click", function() {
        console.log("gb clicked");
        gbAnswer.style.display = "block";
        document.getElementById("gbAnswer").className = "answer";
    });

    close6.addEventListener("click", function() {
        gbAnswer.style.display = "none";
    })
});
// ----------------------------------------------
/*for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function() {
        this.parentElement.style.display = "none";
    }); */
