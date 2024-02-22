const http = require ('http')

const port = 3000

const server = http.createServer((req, res) => { 

// res = respnse e req = requisition
res.write('Oi HTTP') 
res.end() 

})

//Escutar a porta
server.listen(port, () => {
console.log(`Servidor rodando na porta: ${port}`)
})