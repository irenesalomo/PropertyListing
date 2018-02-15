define(["utils"], function (utils) { 
//    var elem = ; 
//    util.bindEvents($('.header'), 'click', $('.homepage'), function(){
//        console.log("hallo");
//    });
    
    return {
        init : function (requestURL) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
            if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                // If request is done & successful, combine result & saved properties into 1 object, store the saved properties ID into 1 object & display them
                var resultProperties = request.response.results;
                var savedProperties = request.response.saved;
                var savedPropertiesID = [];
                savedProperties.forEach (function(property){
                    savedPropertiesID.push(property.id);
                });
                
                
                utils.renderTemplate('column__results', 'column__property', resultProperties);
                utils.renderTemplate('column__saved', 'column__property', savedProperties);
                utils.updateSavedPropertyButton();
//                bindEvents();
//                
//                lib.propertyLibrary = {
//                    properties : resultProperties.concat(savedProperties)
//                };
//                
//                lib.savedPropertyID = savedPropertiesID;
////                console.log(lib);
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
    
    
//(function(root, undefined){
//	'use strict';
//    // Create the local library object, to be exported or referenced globally later
//    var lib = {};
    
//    init : function (requestURL = "src/data/property.json") {
//        var request = new XMLHttpRequest();
//        request.onreadystatechange = function() {
//            if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
//                // If request is done & successful, combine result & saved properties into 1 object, store the saved properties ID into 1 object & display them
//                
//                var resultProperties = request.response.results;
//                var savedProperties = request.response.saved;
//                var savedPropertiesID = [];
//                savedProperties.forEach (function(property){
//                    savedPropertiesID.push(property.id);
//                });
//                
//                lib.propertyCardTemplate = Handlebars.compile($('#propertyCard-template').html());
//                
//                renderTemplate('column__results', resultProperties);
//                renderTemplate('column__saved',savedProperties);
//                updateSavedPropertyButton();
//                bindEvents();
//                
//                lib.propertyLibrary = {
//                    properties : resultProperties.concat(savedProperties)
//                };
//                
//                lib.savedPropertyID = savedPropertiesID;
////                console.log(lib);
//            }
//        }
//        
//        request.open('GET', requestURL);
//        request.responseType = 'json';
//        request.send();
//    })();
//    
//    // Remove property ID from savedPropertyID array
//    lib.removeSavedProperty = function removeSavedProperty(savedProperty = lib.savedPropertyID, propertyID) {
//        const index = savedProperty.indexOf(propertyID);
//        savedProperty.splice(index, 1);
//    };
//    
//    // Add property ID into savedPropertyID array
//    lib.addSavedProperty = function addSavedProperty(savedProperty, propertyID) {
//
//        // Check if this property has already exists on savedPropertyID array, if not then save the ID 
//        if (savedProperty.indexOf(propertyID) === -1) {
//            savedProperty.push(propertyID);
//            return true;
//        }
//        else {
//            return false;
//        }
//    }
//}); 
    
    
/* --- Internal Helper Methods --- */
    // To render Handlebars template given HTML target element and the property data
//    function renderTemplate(targetElementId, data) {
//        var output = {
//            properties : data
//        } 
//        $('#'+targetElementId).html(lib.propertyCardTemplate(output));
//    }
//    
//    function bindEvents(){
//        // Event triggered when user click 'Save' button on result property column
//        $('#column__results').on('click', '.propertyCard__overlay__button', function(){
//            // Retrieve propertyID from propertyCard's data attribute
//            var clickedID = $(this).parents('.propertyCard').data('id').toString();
//            
//            if (lib.addSavedProperty(lib.savedPropertyID, clickedID)) {
//                showConfirmation($(this), "Property saved.");
//                renderTemplate('column__saved', getSavedPropertyData());
//                updateSavedPropertyButton();
//
//            }
//            else {
//                showConfirmation($(this), "This property already exists on your saved list.");
//            }
//        });
//        
//        // Event triggered when user click 'Remove' button on saved property column
//        $('#column__saved').on('click', '.propertyCard__overlay__button', function() {
//            var clickedID = $(this).parents('.propertyCard').data('id').toString();
//            
//            lib.removeSavedProperty(lib.savedPropertyID, clickedID);
//            renderTemplate('column__saved', getSavedPropertyData());
//            updateSavedPropertyButton();
//
//        });
//    }
//    
//    // To display notification to users that the property has been saved to their list
//    // TODO: Maybe implement this with asynch?
//    function showConfirmation(targetSibling, confirmationText){
//        $(targetSibling).siblings('.propertyCard__overlay__button__notification')
//                        .text(confirmationText)
//                        .fadeIn( "fast", function() {
//                            $('.propertyCard__overlay__button__notification').delay(2000).fadeOut("slow"); 
//                        });
//    }
//    
//    // To retrieve saved property information based on the property ID on savedProperty array, to be rendered on template
//    // TODO: Need to handle edge case when result and saved properties has same element at initial state. Although this is currently not the case with the given JSON. 
//    function getSavedPropertyData(){
//        var savedPropertiesData = lib.propertyLibrary.properties.filter(function(property) {
//            return lib.savedPropertyID.indexOf(property.id) !== -1;
//        });
//        return savedPropertiesData;
//    }
//    
//    // Quick fix to change button value to be Remove
//    // TODO: replace this function with better implementation on Handlebars template
//    function updateSavedPropertyButton(){
//        $('.propertyCard__overlay__button', $('#column__saved')).each(function () {
//            $(this).prop('value', 'Remove'); 
//        });
//    };
    
//    root['propertyListing'] = lib;
//    
//})(this);