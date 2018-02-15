define(["../src/utils"], function(utils){
    describe('Testing the functionality of Property Listing Util methods, this is the checklist', function(){
        var savedPropertyID = [];
        beforeEach(function(){
            savedPropertyID = ["1"];
        })

        it('should remove saved property ID', function(){
            utils.removeSavedProperty(savedPropertyID, "1");  
            expect(savedPropertyID.length).toBe(0);
          })
        it('should add saved property ID into an array', function(){
            utils.addSavedProperty(savedPropertyID, "4");
            expect(savedPropertyID[1]).toBe("4");
        })
        it('should not add property ID that already exists on saved property ID array', function(){
            utils.addSavedProperty(savedPropertyID, "1");
            expect(savedPropertyID.length).toBe(1);
        })
    })
});

