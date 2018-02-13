describe('Testing the functionality of Property Listing, this is the checklist', function(){
  it('should toggle property isSaved status', function(){
    var propertiesArray = 
        [{
            "price": "$726,500",
            "agency": {
            "brandingColors": {
                "primary": "#ffe512"
            },
            "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
            },
            "id": "1",
            "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg",
            isSaved: true
        },{
            "price": "$560,520",
            "agency": {
                "brandingColors": {
                    "primary": "#fcfa3b"
                },
                "logo": "http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif"
            },
            "id": "2",
            "mainImage": "http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg",
            isSaved: false
        }];
      
    expect(propertyListing.togglePropertySaveStatus(propertiesArray, 1)).toBe(false);
    expect(propertyListing.togglePropertySaveStatus(propertiesArray, 2)).toBe(true);
  
  })
})