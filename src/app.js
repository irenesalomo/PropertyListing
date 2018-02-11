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
            propertyLibrarySetting(respond.results);
            renderTemplate('column__results',lib.propertyLibrary);
            savedPropertySetting(respond.saved);
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
        
        for(property of properties){
            property.isSaved = false;
        }
        
        lib.propertyLibrary.properties = properties;
    }
    
    function savedPropertySetting(properties){
        for(property of properties){
            property.isSaved = true;
            
//          TODO: Need to handle --> what if the property already exists on propertyLibrary?
            lib.propertyLibrary.properties.push(property);
        }
    }
    
    function getSavedProperty(){
        let tempSavedProperty = {};
        tempSavedProperty.properties = lib.propertyLibrary.properties.filter(function(property) {
            return property.isSaved === true;    
        });
        
        return tempSavedProperty;
    }
    
})();