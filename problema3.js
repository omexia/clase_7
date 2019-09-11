// Problema 3

const calif = [80, 90, 60, 40];
let exam = 0;

for (let index = 0; index < calif.length; index++) {
    if (calif[index] < 60) {
        exam++;        
    }   
}

console.log("Paco tiene que hacer " + exam + " examenes");
