class Cars{ // Carro (modelo, marca, ano, portas, tipo combustível, preço)
    model: string;
    fabricant: string;
    year: number; 
    doors: number; 
    kindFuel: string;

    description():void{
        alert(`Do u have a ${this.model} produced by ${this.fabricant}.\n
               Your car is moved by ${this.kindFuel}.`);
    }
}

let myCar = new Cars();
myCar.model = "Opala";
myCar.fabricant = "Chevrolet";
myCar.kindFuel = "alcohol";
console.log(myCar.description());

let yourCar = new Cars();
yourCar.model = "Chevette";
yourCar.fabricant = "Volkswagen";
yourCar.kindFuel = "gasoline";
console.log(yourCar.description());