const { db, DataTypes } = require('../utils/database.util');

const Gestion = db.define('gestion_tmk', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        },
        fecha_tmk: {
          type: DataTypes.DATE,
          allowNull: false  
        },
        IDENTIFICADOR: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        id_table: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        IDEFECTO: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        IDMOTIVO: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        IDCONTACTO: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        OBSERVACION: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        IDTELEFONO: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        IDDIRECCION: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        IDPERSONAL: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        NOMCONTACTO: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        PISOS: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        PUERTA: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        FACHADA: {
          type: DataTypes.STRING,
          allowNull: false  
        },
        fecha_asignacion: {
          type: DataTypes.DATE,
          allowNull: false  
        },
        fecha_analisis: {
          type: DataTypes.DATE,
          allowNull: false  
        },
        estado : {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'active'
        },
        id_registro : {
          type: DataTypes.STRING,
          allowNull: false  
        },
        fecha_promesa: {
          type: DataTypes.DATE,
          allowNull: false  
        },
        monto_promesa: {
          type: DataTypes.DECIMAL,
          allowNull: false  
        },
        fecha_programacion: {
          type: DataTypes.DATE,
          allowNull: false  
        },
});

module.exports = { Gestion };