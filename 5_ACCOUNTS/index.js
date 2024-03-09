//  modulos externos
const inquirer = require("inquirer")
const chalk = require("chalk")
// modulos internos
const fs = require("fs")
const { error } = require("console")

operation()

function operation(){

    inquirer.prompt([
     {
        type: "list",
        name:"action",
        message:"O que você deseja fazer?",
        choices:[
            "Criar conta",
            "Consultar Saldo",
            "Depositar",
            "Sacar", 
            "Sair"
        ],
      },
    ])
    .then((answer) => {
        const action = answer["action"]
    
        if(action === "Criar conta"){
            createAccount()
        }
        else if(action === "Depositar"){
            deposit() 
        }
        else if(action === "Consultar Saldo"){
        }
        else if(action === "Sacar"){
        }
        else if (action === "Sair"){
            console.log(chalk.bgBlue.black("Obrigado por usar o accounts"))
            Process.exit() 
        }

    })
    .catch((error) => console.log (error))

}

// create account
function createAccount(){
    console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco !!"))
    console.log(chalk.green("Defina as opções da su conta a seguir")) 
    buildAccount()

}

//criar a conta de fato


function buildAccount(){

    inquirer.prompt([
        {
        name:'accountName',
        message: 'Digite um nome para sua conta:'
        }
    ])
    .then((answer) => {
        const accountName = answer["accountName"]
      
        console.info(accountName)

        if(!fs.existsSync('accounts')) {
            fs.mkdirSync("accounts")
        }

        if(fs.existsSync(`accounts/ ${accountName},json`)) {
            console.log(
             chalk.bgRed.black("Essa conta ja existe, por favor escolha outro nome"),
            )
            buildAccount()
            return // sempre que tiver um erro, use o return
        }
        fs.writeFileSync(`accounts/ ${accountName},json`,
        '{"balance":0}',
         function (erro) {
            console.log("erro")
         },    
        )
        console.log(chalk.green("Parabéns, sua conta foi criada"))
        operation()
      })
      .catch((error) => console.log(error)) 
    
}

//add an amount to user account

function deposit(){
   inquirer.prompt([
    {
        name:"accountName",
        message: "Qual o nome da sua conta ?"
    },
   ]) 
    .then((answer) => {
        const accountName = answer ["accountName"]

        //Verify if account exists
        if(!checkAccount(accountName)){
            return deposit()
        }
        inquirer.prompt([
            {
            name:"amount",
            message: "Quanto você quer depositar ?"    
        },

        ]) .then((answer) => {
           const amount = answer ['amount']

           //add an amount
           addAmont(accountName, amount)
           operation()
        })
           .catch((erro) => console.log(erro))
    })
    .catch(erro => console.log(erro))
}

function checkAccounts(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black("Esta conta não existe, escolhe outro nome"))
        return false
    }
    return true
}

function addAmont(accountName, amount){
    const account = getAccount(accountName)

    console.log(account)

}


function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`,{
        encoding: "utf8",  // pacote de acentos no brasil
        flag: "r",  //ler arquivo        
    })

    return JSON.parse(accountJSON)
}