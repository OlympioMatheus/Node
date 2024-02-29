const fs = require('fs')
//remover arquivos com o fs, precisa passar o arquivo como parâmetro
fs.unlink('arquivo.txt', function(erro){
   if (erro){

    console.log(erro)
    return
   } 
   else
   console.log('Arquivo removido!')
})