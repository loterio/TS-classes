class Person { // Pessoa (nome, sobrenome, CPF, RG, data nascimento)
    firstName: string;
    lastName: string;
    cpf: number;
    rg: number;
    bornDate: number;

    presentation():void {
        let fullName = this.firstName + " " + this.lastName;
        console.log(`my name is ${fullName}
                    i was born on ${this.bornDate}
                    and my identification references are:
                    CPF: ${this.cpf} and RG: ${this.rg}`);
    }
}

let me = new Person();
me.firstName = "Fabio"
me.lastName = "Loterio"
me.cpf = 07;944031907
me.rg = 6936123
me.bornDate = 28072002
me.presentation();