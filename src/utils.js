/* --- Internal Helper Methods --- */
define(function(utils) {
    return {
        //Show confirmation text after user clicks save button
        showConfirmation: function(targetSibling, confirmationText) {
            $(targetSibling).siblings('.propertyCard__overlay__button__notification')
                            .text(confirmationText)
                            .fadeIn( "fast", function() {
                                $('.propertyCard__overlay__button__notification').delay(2000).fadeOut("slow"); 
                            });
        },
    }
});