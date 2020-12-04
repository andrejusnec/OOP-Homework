import { Birds } from '../Birds.js';

class Falcon extends Birds {
    constructor(name, mainColor, flySpeed) {
        super(name, mainColor, flySpeed)
        this.flySpeed = flySpeed;
        this.life = 'Up to 17 years';
        this.pray = ['Rabbit', 'Small bird', 'Chicken', 'Unclucky day - the pray has got away...'];
        this.rnd = 0

    }
    Hunt() {
        this.rnd = Math.floor(Math.random()* this.pray.length) //Suapvalinu reiksme iki sveiku skaiciu
        console.log(this.pray[this.rnd]);
    }
}
export { Falcon }