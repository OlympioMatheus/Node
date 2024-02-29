const fs = require("fs")

if(!fs.existsSync("./minhapasta")) {
    console.log("Não existe")
    fs.mkdirSync("minhapasta") // cria um diretório 
} else if(fs.existsSync("./minhapasta")) {  // ver se existe a sincronização
    console.log("Existe")
} 
