/**
 * Created by Herve on 10/08/2019.
 */

$(function() {
    $('#target').on('mouseenter mousemove mouseleave', function(e){
       if(e.type == 'mouseenter') {
           alert("Vous entrez dans le bloc #target");
       }

       else if (e.type == 'mousemove') {
           alert("Vous vous déplacez dans le bloc #target");
       } 
       else if (e.type == 'mouseleave') {
           alert("Vous sortez du bloc #target");
       }
    });
})