(function(root, undefined){
	'use strict';
    // Create the local library object, to be exported or referenced globally later
    var lib = {};
    
    lib.init = (function init(requestURL = "src/data/property.json") {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                // If request is done & successful, combine result & saved properties into 1 object, store the saved properties ID into 1 object & display them
                
                var resultProperties = request.response.results;
                var savedProperties = request.response.saved;
                var savedPropertiesID = [];
                savedProperties.forEach (function(property){
                    savedPropertiesID.push(property.id);
                });
                
                lib.propertyCardTemplate = Handlebars.compile($('#propertyCard-template').html());
                
                renderTemplate('column__results', resultProperties);
                renderTemplate('column__saved',savedProperties);

                
                lib.propertyLibrary = {
                    properties : resultProperties.concat(savedProperties)
                };
                
                lib.savedPropertyID = {
                    propertiesID : savedPropertiesID
                }
                console.log(lib);
            }
        }
        
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
    })();
    
/* --- Internal Helper Methods --- */
    // To render Handlebars template given HTML target element and the property data
    function renderTemplate(targetElementId, data) {
        var output = {
            properties : data
        } 
        $('#'+targetElementId).append(lib.propertyCardTemplate(output));
    }
    
    root['propertyListing'] = lib;
    
})(this);