// Problema 1

const calif = [7, 9, 7];
let prom = 0;

for (let index = 0; index < calif.length; index++) {
    prom = calif[index] + prom;    
}

prom = prom/calif.length;

if (prom >= 8) {
    console.log('BECA');
} else {
    console.log('REPROBADO');
}