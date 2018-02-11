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
            console.log(respond);
            renderTemplate(respond);
        }
        else
            console.log("failed");
    }
    
    function renderTemplate(respond){
        var propertyCardTemplate = Handlebars.compile($('#propertyCard-template').html());
        $('#column__results').html(propertyCardTemplate(respond));
    }
})();