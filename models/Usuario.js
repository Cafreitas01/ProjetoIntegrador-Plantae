module.exports = (sequelize,DataTypes)=>{
    const Usuario =sequelize.define('Usuario',{
        id_uruario:{
            type:DataTypes.INTERGER,
            primaryKey:true,
            autoIncrement: true
        },
        nome:Datatype.STRING,
        email:{
            type:Datatype.STRING,
            allowNull:true
        },
        senha:DataType.STRING
    },{
        tableName:'usuario',
        timestamps:false
    
    })
    return Usuario
}

