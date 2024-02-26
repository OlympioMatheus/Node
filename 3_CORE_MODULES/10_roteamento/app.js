const http = require ('http')
const fs = require('fs')
const url = require("url")
const express = require("express"); 

const app = express();
const port = 3000

const server = http.createServer((req, res) => { 

const q = url.parse(req.url, true)
const filename = q.pathname.substring(1) // (1) ve do segundo carcarcter para frente

app.get('/contato',(req,res)=>{
    res.sendFile(__dirname + '/contato.html');
});

// IF - Usuário não enviar um nome no formulário
if (filename.includes("html")) {
    if (fs.existsSync(filename)){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200,{'content-Type':'text/html'})
            res.write(data)
            return res.end()    
        })
    } else{ 
        // 404
     } 
  }
})


    
//Escutar a porta
server.listen(port, () => {
console.log(`Servidor rodando na porta: ${port}`)
})