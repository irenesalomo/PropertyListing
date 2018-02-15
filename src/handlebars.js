define(function(handlebars) {
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
            $('#'+targetElementId+' .'+elementClass ).html(template(output));
        }, 
        
        // Quick fix to change button value to be Remove
        // TODO: move the HTML element target to parameters. replace this function with better implementation on Handlebars template in the future
        updateSavedPropertyButton : function() {
//            $('.'+targetClassEl ', $(#' +targetIdEl).each(function () {
//                $(this).prop('value', 'Remove'); 
//            });
//            debugger;
            $('.propertyCard__overlay__button', $('#column__saved')).each(function () {
                $(this).prop('value', 'Remove'); 
            });
        }
    }
});