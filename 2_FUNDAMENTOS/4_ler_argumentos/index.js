// nome

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1] //split divide a string quando ver o "="

console.log(nome)

const idade = args[1].split('=')[1]

console.log(idade)

console.log(`o nome dele é ${nome} e ele tem ${idade} anos`)
