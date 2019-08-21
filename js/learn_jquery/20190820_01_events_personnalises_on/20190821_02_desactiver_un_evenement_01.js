/**
 * Created by Herve on 10/08/2019.
 */
// Désactiver une méthode de gestion évènementielle :
$(function() {
    $('#activer').on('click', function() {
        // On branche l'évenement click sur l'image :
        $('img.pict-moses').click(traitement);
    });

    $('#desactiver').on('click', function() {
        $('img.pict-moses').off('click', traitement);
    })
})

function traitement() {
    alert("Image cliquée");
}
