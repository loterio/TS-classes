var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.presentation = function () {
        var fullName = this.firstName + " " + this.lastName;
        console.log("my name is " + fullName + "\n                    i was born on " + this.bornDate + "\n                    and my identification references are:\n                    CPF: " + this.cpf + " and RG: " + this.rg);
    };
    return Person;
}());
var me = new Person();
me.firstName = "Fabio";
me.lastName = "Loterio";
me.cpf = 07;
944031907;
me.rg = 6936123;
me.bornDate = 28072002;
me.presentation();
