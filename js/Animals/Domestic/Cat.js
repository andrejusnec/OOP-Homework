import { Domestic } from '../Domestic.js';

class Cat extends Domestic { 
    constructor(name, mainColor, breed, weight) {
        super(name, mainColor, breed)
        this.weight = weight;
        this.voice = 'Miau Miau';
        this.active = 'Not very active';
        this.game = '"Feed Me"';
    }
}
export { Cat }