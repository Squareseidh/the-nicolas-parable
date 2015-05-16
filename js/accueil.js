/*global  $, window*/
function githubapi() {
    "use strict";
    var i;
    
    $.ajax({
        url: 'https://api.github.com/users/Squareseidh',
        success: function (resultat) {
            var avatar = $("<img src='" + resultat.avatar_url + "' alt='" + resultat.login + "'>"),
                lienGithub = $("<a href='" + resultat.html_url + "' target='_blank'></a>"),
                username = $("<h1>" + resultat.login + "</h1>"),
                followers = $("<h2><span>" + resultat.followers + "</span> followers</h2>"),
                following = $("<h2><span>" + resultat.following + "</span> following</h2>"),
                location = $("<h2><i class='md-location-on'></i>" + resultat.location + "</h2>"),
                infos = $('<section>');
            
            lienGithub.append(avatar);
            infos.append(username);
            infos.append(followers);
            infos.append(following);
            infos.append(location);
            
            $('#githubUser').append(lienGithub);
            $('#githubUser').append(infos);
        }
    });
    
    /*
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
                comCommit,
                dateCrea,
                createur,
                phrase,
                verbe;
            
            for (i = 0; i < 3; i += 1) {
                
                if (resultat[i].type === "PushEvent") {
                    
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
        }
    });
    */
}




/*global  $, window*/
function principale() {
    "use strict";
    var $dialogue,
        $commentaire,
        i = 0;
    
    $('#loader').hide();
    $('.presentation').fadeIn();
    $('.video').fadeIn();
    $('.circ-menu').fadeIn();
    
    $dialogue = $('#accueil .presentation h2');
    $commentaire = $('#accueil #commentaires h2');
    
    $commentaire.hide();
    
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
    
    githubapi();
}



window.onload = principale;