requirejs.config({
    "paths": {
      "jquery" : "//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min",
      "handlebarLib": "//cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min"
    }
});

(function() {
    require(["app", "utils"], function (app, utils) {
        app.init('src/data/property.json');

    });
})();
