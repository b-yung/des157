// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

/* call variables
*/

var byung = document.getElementById('byung');
var byungTip = document.getElementById('byungTip');

var birth = document.getElementById('birth');
var birthTip = document.getElementById('birthTip');

var baby = document.getElementById('baby');
var babyTip = document.getElementById('babyTip');

var purchase = document.getElementById('purchase');
var purchaseTip = document.getElementById('purchaseTip');

var spikes = document.getElementById('spikes');
var spikesTip = document.getElementById('spikesTip');

var thous = document.getElementById('thous');
var thousTip = document.getElementById('thousTip');



var tipTimer;

/* event listeners
–––––––––––––––––––––––––––––––––––––––––––––––––– */

byung.addEventListener ('mouseover', function(){
  console.log('mouseover on byung sneakers');
  tipTimer = setTimeout(showByungTip, 1000);
});

byung.addEventListener ('mouseout', function(){
  console.log('mouseout on byung sneakers');
  clearTimeout(tipTimer);
  byungTip.style.opacity = 0;
});

function showByungTip () {
  console.log('showing msg');
  byungTip.style.opacity = .8;
  byungTip.style.transition = 'all .5s';
}

/* start birth
–––––––––––––––––––––––––––––––––––––––––––––––––– */

birth.addEventListener ('mouseover', function(){
  console.log('mouseover on birth sneakers');
  tipTimer = setTimeout(showbirthTip, 1000);
});

birth.addEventListener ('mouseout', function(){
  console.log('mouseout on birth sneakers');
  clearTimeout(tipTimer);
  birthTip.style.opacity = 0;
});

function showbirthTip () {
  console.log('showing msg');
  birthTip.style.opacity = .9;
  birthTip.style.transition = 'all .5s';
  birthTip.style.left = '20px';
}


/* start baby
–––––––––––––––––––––––––––––––––––––––––––––––––– */

baby.addEventListener ('mouseover', function(){
  console.log('mouseover on baby sneakers');
  tipTimer = setTimeout(showbabyTip, 1000);
});

baby.addEventListener ('mouseout', function() {
  console.log('mouseout on baby sneakers');
  clearTimeout(tipTimer);
  babyTip.style.opacity = 0;
});

function showbabyTip () {
  console.log('showing msg');
  babyTip.style.opacity = .9;
  babyTip.style.transition = 'all .5s';
  babyTip.style.left = '-400px';
}


  /* start purchase
–––––––––––––––––––––––––––––––––––––––––––––––––– */

purchase.addEventListener ('mouseover', function(){
  console.log('mouseover on birth sneakers');
  tipTimer = setTimeout(showpurchaseTip, 1000);
});

purchase.addEventListener ('mouseout', function(){
  console.log('mouseout on birth sneakers');
  clearTimeout(tipTimer);
  purchaseTip.style.opacity = 0;
});

function showpurchaseTip () {
  console.log('showing msg');
  purchaseTip.style.opacity = .9;
  purchaseTip.style.transition = 'all .5s';
  purchaseTip.style.left = '20px';
}


/* start spikes
–––––––––––––––––––––––––––––––––––––––––––––––––– */

spikes.addEventListener ('mouseover', function(){
  console.log('mouseover on 2009');
  tipTimer = setTimeout(showspikesTip, 1000);
});

spikes.addEventListener ('mouseout', function(){
  console.log('mouseout on 2009');
  clearTimeout(tipTimer);
  spikesTip.style.opacity = 0;
});

function showspikesTip () {
  console.log('showing msg');
  spikesTip.style.opacity = .9;
  spikesTip.style.transition = 'all .5s';
  spikesTip.style.left = '-400px';
}


  /* start thous
–––––––––––––––––––––––––––––––––––––––––––––––––– */

thous.addEventListener ('mouseover', function(){
  console.log('mouseover on 2015');
  tipTimer = setTimeout(showthousTip, 1000);
});

thous.addEventListener ('mouseout', function(){
  console.log('mouseout on 2015');
  clearTimeout(tipTimer);
  thousTip.style.opacity = 0;
});

function showthousTip () {
  console.log('showing msg');
  thousTip.style.opacity = .9;
  thousTip.style.transition = 'all .5s';
  thousTip.style.left = '20px';
}

  /* start countdown
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var days = document.getElementById('days')
var today = new Date();
var nextBuy = new Date(2017,7,17);
// find out the absolute difference between the
// two date objects with the getTime() method
var timeDiff = Math.abs(today.getTime() - nextBuy.getTime());

// convert from milliseconds to days by
// dividing by milliseconds * minutes * hours
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

days.innerHTML = diffDays;


});
