import { Fishes } from '../Fishes.js';

class Tuna extends Fishes {
    constructor(name, mainColor, livesIn, weight) {
        super (name, mainColor, livesIn)
        this.weight = weight;
        this.type = 'predator'
        this.speed = 11;
        this.netto = 0;
        this.looseWeight = 0.8;
        this.meat = 'blue';
    }
    fishNetto(RawAmountkg) {
        if(typeof RawAmountkg === 'number'){
            this.netto = RawAmountkg * this.looseWeight;
            
            console.log(`From ${RawAmountkg} kg of fish you will get ${parseFloat(this.netto).toFixed(2)} kg's of ${this.meat} meat`)
        } else {
            console.log(`I asked for weight of your fish! Keep your random text for internet and friends! `)
        }
    }
}
export { Tuna }