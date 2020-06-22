var Cars = /** @class */ (function () {
    function Cars() {
    }
    Cars.prototype.description = function () {
        alert("Do u have a " + this.model + " produced by " + this.fabricant + ".\n\n                Your car is moved with " + this.kindFuel + ".");
    };
    return Cars;
}());
var myCar = new Cars();
myCar.model = "Opala";
myCar.fabricant = "Chevrolet";
myCar.kindFuel = "alcohol";
console.log(myCar.description());
