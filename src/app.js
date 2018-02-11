(function(){
    // Create the local library object, to be exported or referenced globally later
    var lib = {};
    requestInput();

    function requestInput(){
        lib.request = new XMLHttpRequest();

        var requestURL = "src/data/property.json";
        lib.request.onreadystatechange = processRequest;

        lib.request.open('GET', requestURL);
        //set the request to convert the JSON response directly into a JavaScript object
        lib.request.responseType = 'json';
        lib.request.send();
    };

    // Call this function when request is done & successful
    function processRequest(){
        if(lib.request.readyState === XMLHttpRequest.DONE && lib.request.status === 200) {
            var respond = lib.request.response;
            propertyLibrarySetting(respond);
            renderTemplate('column__results',lib.propertyLibrary);
            savedPropertySetting(respond);
            renderTemplate('column__saved',getSavedProperty());
            console.log(lib);
        }
        else
            console.log("failed");
    }
    
    function renderTemplate(targetElementId, data){
        var propertyCardTemplate = Handlebars.compile($('#propertyCard-template').html());
        $('#'+targetElementId).append(propertyCardTemplate(data));
    }
    
    function propertyLibrarySetting(properties){
        lib.propertyLibrary = {
            properties : []
        };
        
        lib.propertyLibrary.properties = properties.results;
    }
    
    function savedPropertySetting(properties){
        lib.savedProperty = {
            properties : []
        }
        
        for(property of properties.saved){
            lib.propertyLibrary.properties.push(property);
            lib.savedProperty.properties.push(property.id);
        }
    }
    
    function getSavedProperty(){
        let tempSavedProperty = {
            properties: []
        };
        
        for (let propertyID of lib.savedProperty.properties){
            var found = lib.propertyLibrary.properties.find(function(property){
                return property.id === propertyID;
            });
            tempSavedProperty.properties.push(found);
        }
        
        return tempSavedProperty;
    }
    
})();