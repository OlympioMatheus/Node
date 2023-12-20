const fs = required ('fs');  // file system

fs.readFile('arquivo.txt', 'utf8',(err, data) => {

    if (err){
        console.log(err)   // para imprimir 

    }

    console.log(data)

});