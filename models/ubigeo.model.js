const { db, DataTypes } = require('../utils/database.util');

const Ubigeo = db.define('ubigeo', {
        codDepartamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        codProvincia: {
          type: DataTypes.INTEGER,
          allowNull: false  
        },
        codDistrito: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        departamento: {
            type: DataTypes.STRING,
            allowNull: false  
        },
        provincia: {
            type: DataTypes.STRING,
            allowNull: false  
        },
        distrito: {
            type: DataTypes.STRING,
            allowNull: false  
        },
    },
            {freezeTableName: true}
    );
    Ubigeo.removeAttribute('id');
    
    module.exports = { Ubigeo };