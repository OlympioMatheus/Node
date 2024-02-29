const path = require("path")

const customPath = "/relatorios/olympio/relatorio1.pdf"

console.log(path.dirname(customPath)) //nome do diretório
console.log(path.basename(customPath)) // onde está localizado
console.log(path.extname(customPath))  // o tipo de arquivo 