describe('Testing the functionality of Property Listing, this is the checklist', function(){
    var savedPropertyID = [];
    beforeEach(function(){
        savedPropertyID = ["1"];
    })
    
    it('should remove saved property ID', function(){
        propertyListing.removeSavedProperty(savedPropertyID, "1");  
        expect(savedPropertyID.length).toBe(0);
      })
    it('should add saved property ID into an array', function(){
        propertyListing.addSavedProperty(savedPropertyID, "4");
        expect(savedPropertyID[1]).toBe("4");
    })
})