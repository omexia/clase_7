// Problema 5

const alumnos = [{
    nombre: "Joel Humberto",
    materias: [{
        nomMat: 'Español',
        calif: 80
    }, {
        nomMat: 'Mate',
        calif: 60
    }, {
        nomMat: 'Ciencias',
        calif: 40
    }]
}, {
    nombre: "Saul",
    materias: [{
        nomMat: 'Español',
        calif: 60
    }, {
        nomMat: 'Mate',
        calif: 60
    }, {
        nomMat: 'Ciencias',
        calif: 90
    }]
}, {
    nombre: "Jordan",
    materias: [{
        nomMat: 'Español',
        calif: 90
    }, {
        nomMat: 'Mate',
        calif: 50
    }, {
        nomMat: 'Ciencias',
        calif: 90
    }]
}, {
    nombre: "Mario",
    materias: [{
        nomMat: 'Español',
        calif: 30
    }, {
        nomMat: 'Mate',
        calif: 80
    }, {
        nomMat: 'Ciencias',
        calif: 90
    }]
}, {
    nombre: "José",
    materias: [{
        nomMat: 'Español',
        calif: 80
    }, {
        nomMat: 'Mate',
        calif: 60
    }, {
        nomMat: 'Ciencias',
        calif: 40
    }]
}, {
    nombre: "Roberto",
    materias: [{
        nomMat: 'Español',
        calif: 60
    }, {
        nomMat: 'Mate',
        calif: 90
    }, {
        nomMat: 'Ciencias',
        calif: 100
    }]
}]

for (let i = 0; i < alumnos.length; i++) {
    for (let j = 0; j < alumnos[i].materias.length; j++) {
        if (alumnos[i].materias[j].calif < 60) {
            console.log(alumnos[i].nombre + " reprobó " + alumnos[i].materias[j].nomMat);
        }
    }
}