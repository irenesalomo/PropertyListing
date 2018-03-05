define(["jquery", "utils", "handlebars"], function ($, utils, handlebars) { 
    "use strict";
    var propertyLibrary = {
        properties : []
    };
    
    var savedPropertyID = [];
    
    var apiMethods = {
        bindEvents : function() {
            // Event triggered when user click 'Save' button on result property column
            utils.eventListener($('#column__results'), 'click','.propertyCard__overlay__button', this.savePropertyEvent);
            
            // Event triggered when user click 'Remove' button on saved property column
            utils.eventListener($('#column__saved'), 'click', '.propertyCard__overlay__button', this.removePropertyEvent);
        },
        // To retrieve saved property information based on the property ID on savedProperty array, to be rendered on template
        // TODO: Need to handle edge case when result and saved properties has same element at initial state. Although this is currently not the case with the given JSON. 
        getSavedPropertyData : function() {
            debugger;
            var savedPropertiesData = propertyLibrary.properties.filter(function(property) {
                return savedPropertyID.indexOf(property.id) !== -1;
            });
            return savedPropertiesData;
        }, 
        // Callback function executed when user click save property button
        savePropertyEvent : function(){                
            // Retrieve propertyID from propertyCard's data attribute
            var clickedID = $(this).parents('.propertyCard').data('id').toString();

            if (utils.addSavedProperty(savedPropertyID, clickedID)) {
                utils.showConfirmation($(this),'.propertyCard__overlay__button__notification', "Property saved.");
                handlebars.renderTemplate('column__saved', 'column__property', apiMethods.getSavedPropertyData());
                handlebars.updateSavedPropertyButton();
        
            }
            else {
                utils.showConfirmation($(this), '.propertyCard__overlay__button__notification', "This property already exists on your saved list.");
            }
        },
        // Callback function executed when user click remove property button
        removePropertyEvent : function(){
            var clickedID = $(this).parents('.propertyCard').data('id').toString();

            utils.removeSavedProperty(savedPropertyID, clickedID);
            handlebars.renderTemplate('column__saved', 'column__property', apiMethods.getSavedPropertyData());
            handlebars.updateSavedPropertyButton();
        },
    };
    
    
    return {
        init : function (requestURL) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
            if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                // If request is done & successful, combine result & saved properties into 1 object, store the saved properties ID into 1 object & display them
                var resultProperties = request.response.results;
                console.log(resultProperties);
                var savedProperties = request.response.saved;
                savedProperties.forEach (function(property){
                    savedPropertyID.push(property.id);
                });
                
                
                handlebars.renderTemplate('column__results', 'column__property', resultProperties);
                handlebars.renderTemplate('column__saved', 'column__property', savedProperties);
                handlebars.updateSavedPropertyButton();
                apiMethods.bindEvents();
                propertyLibrary.properties = resultProperties.concat(savedProperties);
                // propertyLibrary.properties = resultProperties.concat(savedProperties.filter(function (property){
                //     return resultProperties.id.indexOf(property === -1);
                // })
                // );
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