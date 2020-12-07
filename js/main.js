import * as Gyvunai from './Animals/library/Library.js';

const suniukas = new Gyvunai.Dog('Degutas', 'Auksinis','Bajoras','10kg');
const vezliukas = new Gyvunai.Turttle('Mikis','Zaliai Rudas','Karibu juodasis', '0.5 kg');
/*
console.log(suniukas);
console.log(vezliukas);
suniukas.sound();
suniukas.introduce('Labas');
vezliukas.sound();
vezliukas.activity();
vezliukas.animalGame(); 
*/


const papuga = new Gyvunai.Parrot('Ara', 'Red', 20);
const sakalas = new Gyvunai.Falcon('Zveris', 'Brown', 60)

papuga.parrotWeight()
papuga.randomSounds();
papuga.flyTo('');
sakalas.Hunt();