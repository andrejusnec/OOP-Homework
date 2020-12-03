class Animal {
    constructor(name, mainColor) {
        this.name = name;
        this.color = mainColor;
    }
    sound() {
        console.log(`${this.name} is saying: ${this.voice}`);
    }
    introduce(text) {
        if(text === 'Labas') {
            console.log(`Labas, mano vardas ${this.name} ir kaip matai, mano spalva yra ${this.color}`);
        }
        else {
            console.log(`Nepasisveikinai, tai ir as tau nesakisiu savo vardo`);
        }
    }
}
export { Animal }