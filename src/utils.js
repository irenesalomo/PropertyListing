/* --- Internal Helper Methods --- */
define(function(utils) {
    return {
        compileTemplate : function() {
            return Handlebars.compile($('#propertyCard-template').html());
        },
        
        // To render Handlebars template given HTML target element and the property data
        renderTemplate : function(targetElementId, elementClass, data) {
            var output = {
                properties : data
            }; 
            var template = this.compileTemplate();
            $('#'+targetElementId+' .'+elementClass).html(template(output));
        }, 
        
        // Quick fix to change button value to be Remove
        // TODO: replace this function with better implementation on Handlebars template
        updateSavedPropertyButton : function() {
            $('.propertyCard__overlay__button', $('#column__saved')).each(function () {
                $(this).prop('value', 'Remove'); 
            });
        },
        
        bindEvents : function() {
            // Event triggered when user click 'Save' button on result property column
            $('#column__results').on('click', '.propertyCard__overlay__button', function(){
                // Retrieve propertyID from propertyCard's data attribute
                var clickedID = $(this).parents('.propertyCard').data('id').toString();

                if (lib.addSavedProperty(lib.savedPropertyID, clickedID)) {
                    showConfirmation($(this), "Property saved.");
                    renderTemplate('column__saved', getSavedPropertyData());
                    updateSavedPropertyButton();

                }
                else {
                    showConfirmation($(this), "This property already exists on your saved list.");
                }
            });

            // Event triggered when user click 'Remove' button on saved property column
            $('#column__saved').on('click', '.propertyCard__overlay__button', function() {
                var clickedID = $(this).parents('.propertyCard').data('id').toString();

                lib.removeSavedProperty(lib.savedPropertyID, clickedID);
                renderTemplate('column__saved', getSavedPropertyData());
                updateSavedPropertyButton();

            });
        }
    }
    // This function accepts element, event & function callback
//    bindEvents: function(el, evt, context, fn) {
//        el.on(evt, context, fn);
//    },
        
        
        // Event triggered when user click 'Remove' button on saved property column
//        $('#column__saved').on('click', '.propertyCard__overlay__button', function() {
//            var clickedID = $(this).parents('.propertyCard').data('id').toString();
//            
//            lib.removeSavedProperty(lib.savedPropertyID, clickedID);
//            renderTemplate('column__saved', getSavedPropertyData());
//            updateSavedPropertyButton();
//
//        });
//    },
//    // To display notification to users that the property has been saved to their list
//    // TODO: Maybe implement this with asynch?
//    showConfirmation: function(targetSibling, confirmationText) {
//        $(targetSibling).siblings('.propertyCard__overlay__button__notification')
//                        .text(confirmationText)
//                        .fadeIn( "fast", function() {
//                            $('.propertyCard__overlay__button__notification').delay(2000).fadeOut("slow"); 
//                        });
//    },
    // To retrieve saved property information based on the property ID on savedProperty array, to be rendered on template
    // TODO: Need to handle edge case when result and saved properties has same element at initial state. Although this is currently not the case with the given JSON. 
//    getSavedPropertyData: function() {
//        var savedPropertiesData = lib.propertyLibrary.properties.filter(function(property) {
//            return lib.savedPropertyID.indexOf(property.id) !== -1;
//        });
//        return savedPropertiesData;
//    }, 

//    printName: function (name){
//            console.log(name);
//        }
//    
        
});