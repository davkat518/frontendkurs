var action = 'click';
var speed = "500";

$(document).ready(function(){
// Question handler
  $('li.cQuestion').on(action, function(){
    // gets next element
    // opens .a of selected question
    $(this).next().slideToggle(speed)
    // selects all other answers and slides up any open answer
    .siblings('li.cAnswer').slideUp();
    // Grab img from clicked question
    var img = $(this).children('img');
    // remove Rotate class from all images except the active
    $('img').not(img).removeClass('rotate');
    // toggle rotate class
    img.toggleClass('rotate');
  });
});