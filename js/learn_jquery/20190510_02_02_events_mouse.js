/**
 * Created by Herve on 10/08/2019.
 */

$(function() {
    $('#div-scroll').mousedown(function(e) {
        $('#rapport').html(
            'Evènement : ' + e.type + '. Bouton pressé : ' + e.which
        );
    });

})