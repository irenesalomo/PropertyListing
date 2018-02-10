(function(){
    var request = new XMLHttpRequest();
    requestInput();

    function requestInput(){
        var requestURL = "src/data/property.json";
        request.onreadystatechange = processRequest;

        request.open('GET', requestURL);
        //set the request to convert the JSON response directly into a JavaScript object
        request.responseType = 'json';
        request.send();
    };

    // Call this function when request is done & successful
    function processRequest(){
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            var respond = request.response;
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