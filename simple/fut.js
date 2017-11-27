define(
    "fut",
    [],
    function () {
        var FUT = function() {
            this.name = "something"
        };
        
        FUT.prototype = {
            aMethod: function() {
                return this.name
            }
        }
        return FUT;
    }
);