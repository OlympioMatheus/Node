const fs = require ("fs")

const arqAntigo = "arquivo.txt"
const arqNovo = "novoarquivo.txt"
fs.rename(arqAntigo ,arqNovo, function(erro){

    if(erro){
        console.log(erro)
        return
    }
    else
    console.log("Arquivos renomeados")
})