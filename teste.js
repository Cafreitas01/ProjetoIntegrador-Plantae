const { usuario} = require("./database/models")

usuario.findAll().then (response => console.log(response));



//para importar mais tabela é so colocar virgula e colocar 
//as models dentro da const{Usuario,blabla}