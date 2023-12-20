const chalk = require('chalk')

const nota = 8

if(nota >= 7){
    console.log(chalk.green.bold('Parabéns!! você está aprovado'))
}
else{
    console.log(chalk.bgRed('Parabéns!! você precisa fazer a recupeção'))
}


