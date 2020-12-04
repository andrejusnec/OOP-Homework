import { Birds } from '../Birds.js';

class Parrot extends Birds {
    constructor(name, mainColor, flySpeed) {
        super(name, mainColor, flySpeed)
        this.flySpeed = flySpeed;
        this.minWeight = 0.1;
        this.maxWeight = 3;
        this.random = 0;
        this.sound = ['Squawk','I want a crecker!', 'Bark bark?', `${this.name} is happy!`];
        this.randomSound = 0;
    }
    parrotWeight() {
        this.random = Math.random() * this.maxWeight + this.minWeight // Random skaicius tarp dvieju parametru
        console.log(parseFloat(this.random).toFixed(2)) //Apvalinimas skaiciu( ir fiksuotas kiekis po kablelio)
    }
    randomSounds() {
        this.randomSound = Math.floor(Math.random()* this.sound.length) //Suapvalinu reiksme iki sveiku skaiciu
        console.log(this.sound[this.randomSound]); // isprintinu masivo random indeksa
    }
    
}
export { Parrot }