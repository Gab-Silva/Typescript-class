class Animal
{
    cor : string;
    idade : number;
    boca : string;


constructor()
{
    this.cor = "Marrom";
    this.idade = 2;
    this.boca = "Grande";
}

Correr() : void
{
    console.log("Correndo");
}

Dormir() : void
{
    console.log("Dormindo");
}
}

class Cachorro extends Animal
{
    constructor()
    {
        super();
    }
}

class Gato extends Animal
{
    constructor()
    {
        super();
    }
}

let gato = new Gato();
gato.Correr();
gato.Dormir();

let cachorro = new Cachorro();
cachorro.Correr();
cachorro.Dormir();