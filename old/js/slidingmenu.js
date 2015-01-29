/**
 * @author James
 * Menus
 */
$(document).ready(function(){
    //Set default open/close settings
    $('.menu_container').hide(); //Hide/close all containers
    $('.menulink:first').addClass('active').next().next().show(); //Add "active" class to first trigger, then show/open the immediate next container
    //On Click
    $('.menulink').click(function(){
        if ($(this).next().next().is(':hidden')) { //If immediate next container is closed...
            $('.menulink').removeClass('active').next().next().slideUp(); //Remove all "active" state and slide up the immediate next container
            $(this).toggleClass('active').next().next().slideDown(); //Add "active" state to clicked trigger and slide down the immediate next container
        }
        return false; //Prevent the browser jump to the link anchor
    });
});