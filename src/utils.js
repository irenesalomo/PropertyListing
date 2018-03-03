/* --- Internal Helper Methods --- */
// This util uses object as factory
define({
    eventListener: function(el, evt, context, callback){
        el.on(evt, context, callback);
    },
    showConfirmation: function(targetSibling, confirmationClass, confirmationText) {
        $(targetSibling).siblings(confirmationClass)
                        .text(confirmationText)
                        .fadeIn( "fast", function() {
                            $(confirmationClass).delay(2000).fadeOut("slow"); 
                        });
    }, 
    removeSavedProperty : function (savedProperty, propertyID) {
        const index = savedProperty.indexOf(propertyID);
        savedProperty.splice(index, 1);
    },
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


});