/*
Pelo que eu testei o modulo inquirer está com o mesmo problema do chalk,
depois que atualizou parou de funcionar.
Pra funcionar é só usar uma versão antiga do modulo, eu usei a 8.1.0 e funcionou.

O comando pra usar ela é: npm install inquirer@8.1.0
*/
const inquirer = require('inquirer')

inquirer.prompt([ 
{    
    name: 'p1',
    message: ' Qual a primeira nota ?',
},
{
    name: 'p2',
    message: 'Qual a segunda nota ?'
},
])
.then((answers) => {
    console.log(answers) // pode encadear diversas "Then", imprime as repostas
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) /2

    console.log(`A media é: ${media}`)
})
.catch((err) => console.log(err)) // imprimir algum erro