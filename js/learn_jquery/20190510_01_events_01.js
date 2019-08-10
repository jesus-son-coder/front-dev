/**
 * Created by Herve on 10/08/2019.
 */

$(function() {
    $('#div-scroll').scroll(function() {
        alert('Utilisation de la roulette dans la balise <div>');
    });


    $(window).scroll(function() {
        console.log('Utilisation de la roulette dans le document');
    })
})