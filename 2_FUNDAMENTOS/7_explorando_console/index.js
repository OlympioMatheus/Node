// mais de um valor

const x = 10
const y = "Olympio"
const z = [1, 2]

console.log(x, y,z)

// contagem de impressões

console.count(`o valor de x é:${x}, contagem`) // fazer contagem de algo "COUNT"
console.count(`o valor de x é:${x}, contagem`)
console.count(`o valor de x é:${x}, contagem`)
console.count(`o valor de x é:${x}, contagem`)
console.count(`o valor de x é:${x}, contagem`)

// variavel entre string

console.log("o nome dele é %s, ele é programador", y) //%s (string,passou o dado da variável Y)

//limpar o console
setTimeout(() => {
    console.clear()
}, 2000);