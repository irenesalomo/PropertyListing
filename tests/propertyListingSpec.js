describe('Testing the functionality of Property Listing, this is the checklist', function(){
  it('should remove saved property ID', function(){
    var savedPropertyID = ["1"];
    propertyListing.removeSavedProperty(savedPropertyID, "1");  
    expect(savedPropertyID.length).toBe(0);
  })
})