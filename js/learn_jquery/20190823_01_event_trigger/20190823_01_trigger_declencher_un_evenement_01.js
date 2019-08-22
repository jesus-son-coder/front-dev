/**
 * Created by Herve on 10/08/2019.
 */
// Déclencher un évènement grâce au "trigger" :
$(function() {
    $('img').click(function() {
        $('#message').html("L'image a été cliquée").fadeIn(1000).fadeOut(1000);
    });

    $('#activer').click(function() {
        $('img').trigger('click');
    })

})

