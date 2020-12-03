import { Animal } from './Animals.js';
class Domestic extends Animal {
    constructor(name, mainColor, breed) {
        super(name, mainColor);
        this.breed = breed;
        this.active = 0;
    }
    activity() {
        console.log(`${this.name} is ${this.active}`)
    }
    animalGame() {
        console.log(`${this.name} likes to play ${this.game}. When he plays , he is like : ${this.voice}`)
    }
}
export { Domestic };