const { db, DataTypes } = require('../utils/database.util');

const User = db.define('personal', {
    IDPERSONAL: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    APELLIDOS: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    NOMBRES: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    FECHANAC: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    SEXO: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    DOC: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ESTCIV: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    CARFAM: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    NUMHIJ: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    DIRECCION: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DISTRITO: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DPTO: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    REFDIR: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TLF: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CEL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    EMAIL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    GRADOINS: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    CARGO: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    IDSUCURSAL: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    USUARIO: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PASSWORD: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    IDESTADO: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fecha_baja: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    id_cartera: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    api_token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = { User };