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
        $('img.pict-moses').off('click', openDialog);
    })

})

function openDialog() {
    $( "#confirmation" ).dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            "Fermer": function() {
                $( this ).dialog( "close" );
            }
        }
    });
}


