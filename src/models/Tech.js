const { Model, DataTypes } = require('sequelize');

class Tech extends Model{

    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
          
        
        },{
            sequelize,
            tableName: 'techs'
        })

    }
    //para ele saber que ele tbm pertecem a um unico usuario
    static associate(models){
        this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' })
    }



}

module.exports = Tech;

