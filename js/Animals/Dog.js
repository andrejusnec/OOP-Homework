import { Domestic } from './Domestic.js';

class Dog extends Domestic { 
    constructor(name, mainColor, breed, weight) {
        super(name, mainColor, breed)
        this.weight = weight;
        this.voice = 'Gaf Gaf';
        this.active = 'Active';
        this.game = 'Ball'
    }
}
export { Dog }