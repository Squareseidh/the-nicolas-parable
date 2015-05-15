/*global  $, window*/
function principale() {
    "use strict";
    var i,
        nbCommits = 0;
    
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
            for (i = 0; i < resultat.length; i += 1) {
                
                var nom = $("<h1>" + resultat[i].name + "</h1>"),
                    lienRepo = $("<a href='" + resultat[i].git_url + "' target='_blank'></a>"),
                    descr = $("<p>" + resultat[i].description + "</p>"),
                    creation = $("<h3>Crée le: " + $.format.date(resultat[i].created_at, "d MMM yy")  + "</h3>"),
                    language = $("<h2>" + resultat[i].language + "</h2>"),
                    repo = $('<section></section>');
            
                lienRepo.append(nom);
                repo.append(nom);
                repo.append(descr);
                repo.append(creation);
                repo.append(language);
                
                $('#githubRepo').append(repo);
            }
        }
    });
    
    $.ajax({
	    url: 'https://api.github.com/users/Squareseidh/events',
        success: function (resultat) {
            console.log(resultat);
            var sectionCommit = $('<section>'),
                repoCommit,
                commits,
                comCommit,
                dateCrea,
                createur,
                phrase,
                verbe;
            
            for (i = 0; i < 3; i += 1) {
                
                if (resultat[i].type === "PushEvent") {
                    
                    nbCommits += 1;
                    phrase = $('<p>');
                    
                    repoCommit = $("<a href='" + resultat[i].repo.name + "' target='_blank'>" + resultat[i].repo.name + "</a>");
                    dateCrea = $('<span>' + $.format.date(resultat[i].created_at, "d MMM yy HH:mm ") + '</span>');
                    createur = $('<span>' + resultat[i].actor.login + '</span>');
                    verbe = ' a modifié ';
                    
                    
                    phrase.append(dateCrea);
                    phrase.append(createur);
                    phrase.append(verbe);
                    phrase.append(repoCommit);
                    
                    sectionCommit.append(phrase);
                    
                    $(resultat[i].payload.commits).each(function () {
                        comCommit = $('<blockquote>' + this.message + '</blockquote>');
                        sectionCommit.append(comCommit);
                    });
                    
                    $('#event').append(sectionCommit);
                }
            }
            commits = $('<h2>' + nbCommits + ' commits</h2>');
            $('#githubUser').append(commits);
        }
    });
}



window.onload = principale;