import { Domestic } from './Domestic.js';

class Turttle extends Domestic { 
    constructor(name, mainColor, breed, weight) {
        super(name, mainColor, breed)
        this.weight = weight;
        this.voice = 'Cowabunga';
        this.active = 'Plays dead';
        this.game = 'as if he is sleeping'
    }
}
export { Turttle }