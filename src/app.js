define(["jquery", "utils", "handlebars"], function ($, utils, handlebars) { 
    var propertyLibrary = {
        properties : []
    };
    
    var savedPropertyID = [];
    
    var apiMethods = {
        // TODO: Replace this function with dynamic one that looks like following: This function accepts element, event & function callback
        // bindEvents: function(el, evt, context, fn) {
        // el.on(evt, context, fn);
        // },
        bindEvents : function() {
            // Event triggered when user click 'Save' button on result property column
            $('#column__results').on('click', '.propertyCard__overlay__button', function(){
                // Retrieve propertyID from propertyCard's data attribute
                var clickedID = $(this).parents('.propertyCard').data('id').toString();

                if (apiMethods.addSavedProperty(savedPropertyID, clickedID)) {
                    utils.showConfirmation($(this), "Property saved.");
                    handlebars.renderTemplate('column__saved', 'column__property', apiMethods.getSavedPropertyData());
                    handlebars.updateSavedPropertyButton();

                }
                else {
                    utils.showConfirmation($(this), "This property already exists on your saved list.");
                }
            });

            // Event triggered when user click 'Remove' button on saved property column
            $('#column__saved').on('click', '.propertyCard__overlay__button', function() {
                var clickedID = $(this).parents('.propertyCard').data('id').toString();

                apiMethods.removeSavedProperty(savedPropertyID, clickedID);
                handlebars.renderTemplate('column__saved', 'column__property', apiMethods.getSavedPropertyData());
                handlebars.updateSavedPropertyButton();

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
        },
        // To retrieve saved property information based on the property ID on savedProperty array, to be rendered on template
        // TODO: Need to handle edge case when result and saved properties has same element at initial state. Although this is currently not the case with the given JSON. 
        getSavedPropertyData : function() {
            var savedPropertiesData = propertyLibrary.properties.filter(function(property) {
                return savedPropertyID.indexOf(property.id) !== -1;
            });
            return savedPropertiesData;
        }
    };
    
    
    return {
        init : function (requestURL) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
            if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                // If request is done & successful, combine result & saved properties into 1 object, store the saved properties ID into 1 object & display them
                var resultProperties = request.response.results;
                var savedProperties = request.response.saved;
                savedProperties.forEach (function(property){
                    savedPropertyID.push(property.id);
                });
                
                
                handlebars.renderTemplate('column__results', 'column__property', resultProperties);
                handlebars.renderTemplate('column__saved', 'column__property', savedProperties);
                handlebars.updateSavedPropertyButton();
                apiMethods.bindEvents();
                propertyLibrary.properties = resultProperties.concat(savedProperties);
            }
            else
                console.log("false");
            } 
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
        }
    }
});