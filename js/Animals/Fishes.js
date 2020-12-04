import { Animal } from './Animals.js';

class Fishes extends Animal {
    constructor(name, mainColor, livesIn) {
        super(name, mainColor);
        this.livesIn = livesIn;
        this.swim = 'Swimming';
    }
    swimms(MoreSpeed) {
        this.MoreSpeed = MoreSpeed;
        console.log(`${this.name} is ${this.swim} at ${this.speed} km/h.`)
        this.speed = this.speed + this.moreSpeed;
        console.log(this.speed)
        console.log(`But thanks to you, this ${this.mainColor} beauty now swims at ${this.speed} km/h`);
    }
    typeOf() {
        console.log(`${this.name} is a ${this.type}. His color of fins is ${this.mainColor} and he lives in a ${this.livesIn}`)
    }
}
export { Fishes }