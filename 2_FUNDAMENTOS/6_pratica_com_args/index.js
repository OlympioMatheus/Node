//modulo externo
const minimist = require('minimist')

//modulo interno
const soma = require('./soma').soma
const mult =require('./mult').mult

const args = minimist(process.argv.slice(2)) // resgata o segundo argumentos process...

const a = parseFloat (args['a']) //ou pode ser parseInt

const b = parseFloat(args['b']) //ou pode ser parseInt

soma(a, b)
mult(a, b)

console.log(soma)
console.log(mult)