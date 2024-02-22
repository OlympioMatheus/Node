const http = require ('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => { 

const urlInfo = require('url').parse(req.url, true)
const name = urlInfo.query.name

// IF - Usuário não enviar um nome no formulário
if (!name){
fs.readFile('index.html', function(err, data){
    res.writeHead(200,'content-Type','text/html')
    res.write(data)
    return res.end()
    })
}

else{

    const nameNewLine = name + ',\r\n'
    fs.appendFile('arquivo.txt', nameNewLine, function(err, data){ //writeFile substitui o que esté em um arquivo
       res.writeHead(302,{
        Location: "/"
       }) 
       return res.end()
    })
}
    
    
})

//Escutar a porta
server.listen(port, () => {
console.log(`Servidor rodando na porta: ${port}`)
})