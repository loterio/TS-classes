var Bicicle = /** @class */ (function () {
    function Bicicle() {
    }
    Bicicle.prototype.description = function () {
        console.log("\n        a " + this.model + " made by " + this.fabricant + ".\n\n        this bike have " + this.numGears + " marchs. \n        ");
    };
    Bicicle.prototype.fullDescription = function () {
        console.log("\n        model: " + this.model + "\n \n        fabricant: " + this.fabricant + "\n\n        number of gears: " + this.numGears + "\n\n        wheel size: " + this.wheelSize + " mm\n\n        body size: " + this.bodySize + " mm\n\n        have suspension? " + this.suspension + "\n\n        it's recomendable use it for " + this.kind + " style of cycling. \n        ");
    };
    return Bicicle;
}());
var m = new Bicicle();
m.fabricant = "mormaii";
m.model = "Urban Sense";
m.kind = "speed";
m.wheelSize = 14;
m.bodySize = 700;
m.numGears = 36;
m.suspension = true;
m.description();
m.fullDescription();
