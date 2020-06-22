class Bicicle{ // Bicicleta (Marca, modelo, tipo (passeio, mtb ou speed), tamanho Aro, tamanho Quadro, qnt Marchas,Suspensão (tipo lógico))
    fabricant: string;
    model: string;
    kind: string;
    wheelSize: number;
    bodySize: number;
    numGears: number;
    suspension: boolean;

    description():void{
        console.log(`
        a ${this.model} made by ${this.fabricant}.\n
        this bike have ${this.numGears} marchs. 
        `);
    }
    fullDescription():void{
        console.log(`
        model: ${this.model}\n 
        fabricant: ${this.fabricant}\n
        number of gears: ${this.numGears}\n
        wheel size: ${this.wheelSize} mm\n
        body size: ${this.bodySize} mm\n
        have suspension? ${this.suspension}\n
        it's recomendable use it for ${this.kind} style of cycling. 
        `);
    }
}

let m = new Bicicle();
m.fabricant = "mormaii";
m.model = "Urban Sense";
m.kind = "speed";
m.wheelSize = 14;
m.bodySize = 700;
m.numGears = 36;
m.suspension = true;
m.description();
m.fullDescription();