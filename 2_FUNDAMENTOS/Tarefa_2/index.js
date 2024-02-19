const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([

{name:'nome', message: 'Qual o seu nome?'},
{name: 'anos', message: 'Qual a sua idade ?'}
])

.then((answers) => {

    if (!answers.nome || !answers.anos ){
        throw new Error("o nome e a idade são obrigatórios, informe os dois, por favor")
    }
    const response = ` O nome do usuário é ${answers.nome} e ele tem ${answers.anos} anos!!!`

    console.log(chalk.bgYellow.black(response))
})
.catch((err) => console.log(err))

    