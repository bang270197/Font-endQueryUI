$(document).ready(function () {
    $("#draggable").draggable();
});
$(document).ready(function()  {
    $( "#draggable1" ).draggable();
    $( "#droppable" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "p" )
                .html( "Dropped!" );
        }
    });
} );
$(document).ready(function () {
    $("#resizable").resizable();
});
$(document).ready(function () {
    $("#selectable").selectable();
});
$(document).ready(function () {
 $("#sortable").sortable();
 $("#sortable").disableSelection();
})