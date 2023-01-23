const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      height_min: {
        //altura
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      height_max: {
        //altura
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight_min: {
        //peso
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight_max: {
        //peso
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lifeTime: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue:
          "https://img.freepik.com/vector-premium/cachorro-enfermo-termometro-sentado-perro-triste-personaje-dibujos-animados-alta-temperatura-fiebre-sintoma-influenza-mascota-resfriado_71593-657.jpg?w=2000",
      },
    },
    { timestamps: false }
  );
};
