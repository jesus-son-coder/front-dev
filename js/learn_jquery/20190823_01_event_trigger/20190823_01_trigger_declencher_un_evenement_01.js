/**
 * Created by Herve on 10/08/2019.
 */
// Désactiver une méthode de gestion évènementielle :
$(function() {
    $('img').click(function() {
        $('#message').html("L'image a été cliquée").fadeIn(1000).fadeOut(1000);
    });

    $('#activer').click(function() {
        $('img').trigger('click');
    })

})

