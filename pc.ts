class Laptop{ // Notebook (Marca, modelo, tamanho tela, processador, memória, preço)
    brand: string;
    model: string;
    screenSize: number;
    processor: string;
    memoryROM: number;
    memoryRAM: number;
    price: number;

    annoucement():void{
        console.log(`New ${this.model} made by ${this.brand}\n
                    starts at ${this.price}$.\n
                    specifications:\n
                    RAM: ${this.memoryRAM} GB\n
                    ROM: ${this.memoryROM} GB\n
                    Screen: ${this.screenSize}"\n
                    Processor: ${this.processor}`);
    }
}

let myOld = new Laptop();
myOld.brand = "ASUS" 
myOld.model = "ultrabook 4"
myOld.screenSize = 15.4
myOld.processor = "Intel-i5 3540u"
myOld.memoryROM = 500
myOld.memoryRAM = 4
myOld.price = 1799.9
myOld.annoucement();