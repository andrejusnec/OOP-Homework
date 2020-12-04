import { Birds } from '../Birds.js';

class Calibri extends Birds {
    constructor(name, mainColor, flySpeed) {
        super(name, mainColor, flySpeed)
        this.flySpeed = flySpeed;
        this.wingClap = 160;
    }
    WingClap() {
        console.log(`${this.name}  can clap wings over ${this.wingClap} per second!`);
    }
}
export { Calibri }