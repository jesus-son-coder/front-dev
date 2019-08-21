/**
 * Created by Herve on 10/08/2019.
 */

$(function() {
    $('#target').keydown(function(){
        $('#lumiere').css('background-color','green');
    });
    $('#target').keyup(function(){
        $('#lumiere').css('background-color','white');
    });


    $('#saisie').keypress(function (e) {
        var c = String.fromCharCode(e.which);
        $('#uneletrtre').text(c);
    })

})