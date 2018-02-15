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
        // Remove property ID from savedPropertyID array
        removeSavedProperty : function (savedProperty, propertyID) {
            const index = savedProperty.indexOf(propertyID);
            savedProperty.splice(index, 1);
        },
        // Add property ID into savedPropertyID array
        addSavedProperty : function (savedProperty, propertyID) {
            // Check if this property has already exists on savedPropertyID array, if not then save the ID 
            if (savedProperty.indexOf(propertyID) === -1) {
                savedProperty.push(propertyID);
                return true;
            }
            else {
                return false;
            }
        }
    }
});