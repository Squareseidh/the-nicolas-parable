/*global  $, window*/
function principale() {
    "use strict";

    $("#rss-feeds").rss("https://github.com/Squareseidh.atom", {
          limit: 3,
          effect: 'slideFastSynced'
    });
    
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