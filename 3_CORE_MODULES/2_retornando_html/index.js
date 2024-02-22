const http = require ('http')

const port = 3000

const server = http.createServer((req, res) => { 
res.statusCode = 200
res.setHeader('Contenty-Type', 'text/html')
res.end('<h1> Opa, esse é o meu primeiro server com HTML!!</h1><p> Testando a tag</p>')
})

//Escutar a porta
server.listen(port, () => {
console.log(`Servidor rodando na porta: ${port}`)
})