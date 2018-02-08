function parseInput(){
    $.getJSON( "src/data/property.json", function( data ) {
      var items = [];
        console.log(data.results);
      $.each( data.results, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
      });

      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
    });
}

parseInput();
console.log("here");