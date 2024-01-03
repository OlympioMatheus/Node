const readline =  require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual a sua linguagem preferida? ", (language) => {
    if(language === "python"){
    console.log('Isso nem é linguagem, é brincadeiraa')
    } else {
        console.log(`A minha linguagem preferida é: ${language} `)
    } 
    readline.close()  // fechar para parar a execução do readline
})