const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consla la tabla de multiplicar', opts)
    .command('Crear', 'Crea un archivo con las tablas de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}