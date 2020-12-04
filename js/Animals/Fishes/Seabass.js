import { Fishes } from '../Fishes.js';

class Seabass extends Fishes {
    constructor(name, mainColor, livesIn, weight) {
        super (name, mainColor, livesIn)
        this.weight = weight;
        this.type = 'Predator'
        this.speed = 11;
        this.netto = 0;
        this.loss = 0.55;
        this.meat = 'white';
    }
    FishNetto(RawAmountkg) {
        if(typeof RawAmountkg === 'number'){
            this.netto = RawAmountkg * this.loss;
            console.log(`From ${RawAmount} kg of fish you will get ${this.loss} kg's of ${this.meat} meat`)
        } else {
            console.log(`I asked for weight of your fish! Keep your random text for internet and friends!`)
        }
    }
}
export { Seabass }