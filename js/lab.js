    google.load("feeds", "1");

    function initialize() {
      var feed = new google.feeds.Feed("https://github.com/Squareseidh.atom");
      feed.load(function(result) {
        console.log(result);
      });
    }
    google.setOnLoadCallback(initialize);


/*global  $, window*/
function principale() {
    "use strict";
    
    $.ajax({
        url: 'https://api.github.com/users/Squareseidh',
        success: function (resultat) {
                   console.log(resultat);
        }
    });
    
    $.ajax({
	    url: 'https://api.github.com/users/Squareseidh/repos',
        success: function (resultat) {
            console.log(resultat);
        }
    });
}



window.onload = principale;