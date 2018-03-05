define(["../src/utils"], function(utils){
    describe('Testing the functionality of Property Listing Util methods, this is the checklist', function(){
        var savedPropertyID = [];
        var resultProperty = [];
        var savedProperty = [];

        beforeEach(function(){
            savedPropertyID = ["1"];
            resultProperty = [{
                "price": "$726,500",
                "agency": {
                    "brandingColors": {
                        "primary": "#ffe512"
                    },
                    "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
                },
                "id": "1",
                "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
            },
            {
                "price": "$826,500",
                "agency": {
                    "brandingColors": {
                        "primary": "#57B5E0"
                    },
                    "logo": "http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif"
                },
                "id": "3",
                "mainImage": "http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"
            }];
            savedProperty = [{
                "price": "$826,500",
                "agency": {
                    "brandingColors": {
                        "primary": "#57B5E0"
                    },
                    "logo": "http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif"
                },
                "id": "3",
                "mainImage": "http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"
            }];
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
        it('should filter out savedProperty array element that exist on result properties', function(){
            
        })
    })
});

