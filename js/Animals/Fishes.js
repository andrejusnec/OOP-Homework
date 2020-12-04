import { Animal } from './Animals.js';

class Fishes extends Animal {
    constructor(name, mainColor, livesIn) {
        super(name, mainColor)
        this.livesIn = livesIn;
        this.swim = 'Swimming';
        this.newSpeed = 0;
    }
    swimms(moreSpeed) {
        console.log(`${this.name} is ${this.swim} at ${this.speed} km/h.`)
        this.newSpeed = this.speed + moreSpeed;
        console.log(this.newSpeed)
        console.log(`But thanks to you, this ${this.color} beauty now swims at ${this.newSpeed} km/h`);
        return 0;
    }
    typeOf() {
        console.log(`${this.name} is a ${this.type}. His color of fins is ${this.color} and he lives in a ${this.livesIn}`)
    }
}
export { Fishes }