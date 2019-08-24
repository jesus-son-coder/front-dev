/**
 * Created by Herve on 10/08/2019.
 */
// :
$(function() {
    $('#master').on('click', 'div', function(){
        $(this).after('<div>Cette &lt;div&gt; a les mêmes caractéristiques que son parent</div>');
    })
})

