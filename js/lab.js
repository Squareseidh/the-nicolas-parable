/*global  $, window*/
function principale() {
    "use strict";
    var i;
    
    $.ajax({
        url: 'https://api.github.com/users/Squareseidh',
        success: function (resultat) {
            var avatar = $("<img src='" + resultat.avatar_url + "' alt='" + resultat.login + "'>"),
                lienGithub = $("<a href='" + resultat.html_url + "' target='_blank'></a>"),
                username = $("<h1>" + resultat.login + "</h1>"),
                followers = $("<h2>" + resultat.followers + " followers</h2>"),
                following = $("<h2>" + resultat.following + " following</h2>"),
                location = $("<h2>" + resultat.location + "</h2>");
            
            lienGithub.append(avatar);
            
            $('#githubUser').append(lienGithub);
            $('#githubUser').append(username);
            $('#githubUser').append(followers);
            $('#githubUser').append(following);
            $('#githubUser').append(location);
        }
    });
    
    $.ajax({
	    url: 'https://api.github.com/users/Squareseidh/repos',
        success: function (resultat) {
            console.log(resultat);
            for (i = 0; i < resultat.length; i += 1) {
                
                var nom = $("<h1>" + resultat[i].name + "</h1>"),
                    lienRepo = $("<a href='" + resultat[i].git_url + "' target='_blank'></a>"),
                    descr = $("<p>" + resultat[i].description + "</p>"),
                    creation = $("<h3>Crée le: " + resultat[i].created_at + "</h3>"),
                    language = $("<h2>" + resultat[i].language + "</h2>"),
                    repo = $('<section></section>');
            
                lienRepo.append(nom);
                repo.append(nom);
                repo.append(descr);
                repo.append(creation);
                repo.append(language);
                console.log(repo);
                
                $('#githubRepo').append(repo);
            }
        }
    });
    
    $.ajax({
	    url: 'https://api.github.com/users/Squareseidh/events',
        success: function (resultat) {
            console.log(resultat);
        }
    });
}



window.onload = principale;