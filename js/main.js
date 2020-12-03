import * as Naminiai from '../js/library/Library.js';

const suniukas = new Naminiai.Dog('Degutas', 'Auksinis','Bajoras','10kg');
const vezliukas = new Naminiai.Turttle('Mikis','Zaliai Rudas','Karibu juodasis', '0.5 kg');

console.log(suniukas);
console.log(vezliukas);
suniukas.sound();
suniukas.introduce('Labas');
vezliukas.sound();
vezliukas.activity();
vezliukas.animalGame();