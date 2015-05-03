/*global  $, window*/
function principale() {
    "use strict";
    var $dialogue;
    
    $('#loader').hide();
    $('.presentation').fadeIn();
    $('.video').fadeIn();
    $('.circ-menu').fadeIn();
    
    $dialogue = $('#accueil .presentation h2');
    
    $('.circ-menu a').arctext({radius: 115}); //incurver les titres du menu
    $('.covervid-video').coverVid(1920, 1080); // la valeur importe peu
    
    $dialogue.hide();
    $dialogue.eq(0).delay(1000).fadeIn(400).delay(2000).fadeOut(400);
    $dialogue.eq(1).delay(4000).fadeIn(400).delay(2000).fadeOut(400);
    $dialogue.eq(2).delay(8000).fadeIn(400).delay(3000).fadeOut(400);
    $dialogue.eq(3).delay(12000).fadeIn(400).delay(4000).fadeOut(400);
    $dialogue.eq(4).delay(17000).fadeIn(400).delay(3000).fadeOut(400);
    $dialogue.eq(5).delay(21000).fadeIn(400).delay(2000).fadeOut(400);
    $dialogue.eq(6).delay(24000).fadeIn(400).delay(2000).fadeOut(400);
    $dialogue.eq(7).delay(27000).fadeIn(400).delay(2000).fadeOut(400);
    $dialogue.eq(8).delay(36000).fadeIn(400).delay(4000).fadeOut(400);
    $dialogue.eq(9).delay(46000).fadeIn(400).delay(3000).fadeOut(400);
    $dialogue.eq(10).delay(50000).fadeIn(400).delay(4000).fadeOut(400);
    $dialogue.eq(11).delay(55000).fadeIn(400).delay(4000).fadeOut(400);
}



window.onload = principale;