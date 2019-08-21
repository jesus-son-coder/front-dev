/**
 * Created by Herve on 10/08/2019.
 */
// Plusieurs méthodes utilisées en une seule instruction :
$(function() {
    $('#target').on({
        mouseenter:animateEnter,
        mouseleave:animateLeave
    });
})

function animateEnter() {
    $('#target').css({
        'width':'700px',
        'height':'230px',
        'background-color':'lightyellow'
    })
}

function animateLeave() {
    $('#target').css({
        'width':'600px',
        'height':'200px',
        'background-color':'white'
    })
}