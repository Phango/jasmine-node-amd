require(['fut'], function(sut){
  describe('RequireJs basic tests', function(){

    it('should load sut', function(){

      expect(sut).toBeDefined();
    });

    it("should be a function", function() {
        var s = new sut();

        console.log(s)

        expect(s.aMethod()).toEqual("something");
    });

  });
});