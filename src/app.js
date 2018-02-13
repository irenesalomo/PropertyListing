(function(root, undefined){
	'use strict';
    // Create the local library object, to be exported or referenced globally later
    var lib = {};
    
    lib.init = (function init(requestURL = "src/data/property.json"){
        var request = new XMLHttpRequest();
        
        request.onreadystatechange = function(){
            // Execute this function when request is done & successful
            if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                
                //Compile Handlebar template
                lib.propertyCardTemplate = Handlebars.compile($('#propertyCard-template').html());
                
                // Add isSaved status on both result & saved objects, then show & combine them
                var resultProperties = request.response.results;
                var savedProperties = request.response.saved;
                
                for(let property of resultProperties){
                    property.isSaved = false;
                }
                renderTemplate('column__results',resultProperties);

                for(let property of savedProperties){
                    property.isSaved = true;
                }
                renderTemplate('column__saved',savedProperties);
                
                lib.propertyLibrary = {
                    properties : resultProperties.concat(savedProperties)
                };

                console.log(lib);
            }
            else
                console.log("failed");
        };

        request.open('GET', requestURL);
        //set the request to convert the JSON response directly into a JavaScript object
        request.responseType = 'json';
        request.send();
    })();
    
    // To toggle property isSaved status 
    lib.togglePropertySaveStatus = function togglePropertySaveStatus(propertyArray = lib.propertyLibrary.properties, propertyID){
        // Find the array index of property given the property ID
        let propertyIndex = propertyArray.findIndex(function(property){
            return property.id == propertyID;
        })
        const done = propertyArray[propertyIndex].isSaved = !propertyArray[propertyIndex].isSaved;
        return done;
    };
    
	/* --- Internal Helper Methods --- */
    //To render Handlebar template, given target HTML element & data 
    
    function renderTemplate(targetElementId, data){
        var propertyCards = {
            properties : data
        }
        $('#'+targetElementId).append(lib.propertyCardTemplate(propertyCards));
    }
    
    root['propertyListing'] = lib;
    
})(this);