describe('Testing the functionality of Property Listing, this is the checklist', function(){
  it('should mark property as saved', function(){
    let property = {
        "id": "1"
    }
    const saved = propertyListing.saveProperty(property);

    expect(propertyListing.getSavedProperty().length).toBe(1);
  })
})