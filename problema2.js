// Problema 2

const asist = [true, false, true, true, false];
let siVine = 0;
let porcentaje = 0;

for (let index = 0; index < asist.length; index++) {
    if (asist[index]) {
        siVine++;
    }
}

porcentaje = (siVine/asist.length)*100;

console.log("Asistencias del " + porcentaje + "%");
