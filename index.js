class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;

        switch (this.tipo){
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada'
                break
            case 'monge':
                ataque = 'artes marciais';
                break
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }
}

//Instâncias
const heroi1 = new Heroi('Merlin', 150, 'mago');
const heroi2 = new Heroi('Link', 18, 'guerreiro');
const heroi3 = new Heroi('Zenyatta', 40, 'monge');
const heroi4 = new Heroi('Naruto', 32, 'ninja');

//Chamando o método atacar
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();