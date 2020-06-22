var Laptop = /** @class */ (function () {
    function Laptop() {
    }
    Laptop.prototype.annoucement = function () {
        console.log("New " + this.model + " made by " + this.brand + "\n\n                    starts at " + this.price + "$.\n\n                    specifications:\n\n                    RAM: " + this.memoryRAM + " GB\n\n                    ROM: " + this.memoryROM + " GB\n\n                    Screen: " + this.screenSize + "\"\n\n                    Processor: " + this.processor);
    };
    return Laptop;
}());
var myOld = new Laptop();
myOld.brand = "ASUS";
myOld.model = "ultrabook 4";
myOld.screenSize = 15.4;
myOld.processor = "Intel-i5 3540u";
myOld.memoryROM = 500;
myOld.memoryRAM = 4;
myOld.price = 1799.9;
myOld.annoucement();
