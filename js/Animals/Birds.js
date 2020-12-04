import { Animal } from './Animals.js';

class Birds extends Animal {
    constructor(name, mainColor, flySpeed) {
        super(name, mainColor)
        this.flySpeed = flySpeed;

    }
    flyTo(flyDirection) {
        if (typeof flyDirection !== 'string') {
            console.log('I need directions, like "south"!');
        }
        if (flyDirection === '') {
            console.log('Okey, no problem - i will stay at your place ;p');
        }
        if (flyDirection === 'South' || flyDirection === 'south') {
            console.log(`Its too late to fly ${flyDirection}! It's winter. ill stay here!`)
        }
        if (flyDirection === 'North' || flyDirection === 'north') {
            console.log(`Are you crazy to send me ${flyDirection}! I'll freeze there!`)
        }
        if (flyDirection === 'West' || flyDirection === 'West') {
            console.log(`I always liked ${flyDirection}! My dream was to become a CowBird!`)
        }
        if (flyDirection === 'East' || flyDirection === 'east') {
            console.log(`Yes boss, ${flyDirection} it is!`);
        }
        else {
            console.log(`I dont understand you, bro. Give me a direction, come on....`)
        }
    }

}
export { Birds }