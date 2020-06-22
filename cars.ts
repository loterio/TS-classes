class Cars{ // Carro (modelo, marca, ano, portas, tipo combustível, preço)
    model: string;
    fabricant: string;
    year: number; 
    doors: number; 
    kindFuel: string;

    description(){
        alert(`Do u have a ${this.model} produced by ${this.fabricant}.\n
                Your car is moved with ${this.kindFuel}.`);
    }
}

let myCar = new Cars();
myCar.model = "Opala";
myCar.fabricant = "Chevrolet";
myCar.kindFuel = "alcohol";
console.log(myCar.description());