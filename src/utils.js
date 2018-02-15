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
        showConfirmation: function(targetSibling, confirmationText) {
            $(targetSibling).siblings('.propertyCard__overlay__button__notification')
                            .text(confirmationText)
                            .fadeIn( "fast", function() {
                                $('.propertyCard__overlay__button__notification').delay(2000).fadeOut("slow"); 
                            });
        },
    }
    // This function accepts element, event & function callback
//    bindEvents: function(el, evt, context, fn) {
//        el.on(evt, context, fn);
//    },
});