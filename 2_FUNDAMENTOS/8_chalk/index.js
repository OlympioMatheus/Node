const chalk = require('chalk')

const nota = 7

if(nota >= 7){
    console.log(chalk.green.bold('Parabéns!! você está aprovado'))
}
else{
    console.log(chalk.bgRed('Você precisa fazer a recupeção'))
}


