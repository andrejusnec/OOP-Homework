import { Animal } from './Animals.js';

class Birds extends Animal {
    constructor(name, mainColor, flySpeed) {
        super(name, mainColor)
        this.flySpeed = flySpeed;

    }
    flyTo(flyDirection) {
        if (typeof flyDirection !== 'string') {
            console.log('I need directions, like "south"!');
            return false;
        }
        let fly = flyDirection.toLowerCase();
        switch (fly) {
            case '' :
            console.log('Okey, no problem - i will stay at your place ;p');
            break;
            case 'south' :
            console.log(`Its too late to fly ${flyDirection}! It's winter. ill stay here!`)
            break;
            case 'north' :
            console.log(`Are you crazy to send me ${flyDirection}! I'll freeze there!`)
            break;
            case 'west' :
            console.log(`I always liked ${flyDirection}! My dream was to become a CowBird!`)
            break;
            case 'east': 
            console.log(`Yes boss, ${flyDirection} it is!`);
            break;
            default:
            console.log(`I dont understand you, bro. Give me a direction, come on....`)
            break;
        }
    }

}
export { Birds }