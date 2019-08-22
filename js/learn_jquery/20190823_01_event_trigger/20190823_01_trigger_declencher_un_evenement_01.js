/**
 * Created by Herve on 10/08/2019.
 */
// Déclencher un évènement grâce au "trigger" :
$(function() {
    $('img').click(function(event, texte) {
        if(texte == undefined) {
            texte = " par vous !";
        }
        $('#message').html("L'image a été cliquée" + texte).fadeIn(1000).fadeOut(2000);
    });

    $('#activer').click(function() {
        $('img').trigger('click', ' par jQuery');
    })

})

