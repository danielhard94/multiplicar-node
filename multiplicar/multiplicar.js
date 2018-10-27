const fs = require('fs');

let listarTabla = (base, limite) => {
    console.log(limite);
    for (let a = base; a <= limite; a++) {
        console.log(a);
        for (let i = 0; i <= 10; i++) {
            console.log(`${a} * ${i} = ${i*a}`);
        }
    }

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un número');
            return;
        }
        let data = '';

        for (let i = base; i <= limite; i++) {
            data += `${base} * ${i} = ${i*base}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}