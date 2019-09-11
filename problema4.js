// Problema 4

const alumnos = [{
    nombre: "Joel Humberto",
    calif: [70, 80, 100]
}, {
    nombre: "Saul",
    calif: [30, 80, 50]
}, {
    nombre: "Jordan",
    calif: [50, 50, 100]
}, {
    nombre: "Mario",
    calif: [90, 90, 60]
}, {
    nombre: "José",
    calif: [50, 60, 80]
}, {
    nombre: "Roberto",
    calif: [90, 40, 70]
}]

let promedio = 0;
let sumaCalif = 0;

for (let i = 0; i < alumnos.length; i++) {
    for (let j = 0; j < alumnos[i].calif.length; j++) {
        sumaCalif = alumnos[i].calif[j] + sumaCalif;
    }

    promedio = sumaCalif/alumnos[i].calif.length;

    if (promedio < 60) {
        console.log("Reprobaron: " + alumnos[i].nombre + " con " + promedio);
    }

    promedio = 0;
    sumaCalif = 0;
}