var Cars = /** @class */ (function () {
    function Cars() {
    }
    Cars.prototype.description = function () {
        alert("Do u have a " + this.model + " produced by " + this.fabricant + ".\n\n               Your car is moved by " + this.kindFuel + ".");
    };
    return Cars;
}());
var myCar = new Cars();
myCar.model = "Opala";
myCar.fabricant = "Chevrolet";
myCar.kindFuel = "alcohol";
console.log(myCar.description());
var yourCar = new Cars();
yourCar.model = "Chevette";
yourCar.fabricant = "Volkswagen";
yourCar.kindFuel = "gasoline";
console.log(yourCar.description());
