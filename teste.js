// require("dotenv").config();

// const { Usuario} = require("./database/models");

// //Usuario.findAll().then (response => console.log(response));



// async function buscarUsuarios (){
//     const usuarios = await Usuarios.findAll({
//         include:"carinho_sessao"
//     }).then(usuarios => usuarios.map(usuario => usuario.toJSON()));
//     console.log(JSON.stringify(usuarios,null,4))
// }

// buscarUsuarios();

//para importar mais tabela é so colocar virgula e colocar 
//as models dentro da const{Usuario,blabla}