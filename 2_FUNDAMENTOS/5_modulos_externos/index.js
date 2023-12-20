const minimist = require("minimist")

const args = minimist(process.argv.slice(2)) // resgata o segundo argumentos process...

console.log(args)

const nome = args['nome']
const profisao = args['profissao']

console.log(`o nome dele é ${nome} e a profissão dele é ${profissao}`)

//console.log(nome, profisao)

