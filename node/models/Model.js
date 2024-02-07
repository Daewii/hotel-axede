// Importar Sequelize y la conexión a la base de datos
import { DataTypes } from "sequelize";
import db from "../database/db.js";

// Definir los modelos
const DisponibilidadHabitacionesModel = db.define('disponibilidad_habitaciones', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    hotel_id: { type: DataTypes.INTEGER, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    tipo_habitacion_id: { type: DataTypes.INTEGER, allowNull: false },
    cantidad_disponible: { type: DataTypes.INTEGER, allowNull: false }
});

const HabitacionesModel = db.define('habitaciones', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    hotel_id: { type: DataTypes.INTEGER, allowNull: false },
    tipo_habitacion_id: { type: DataTypes.INTEGER, allowNull: false },
    cantidad: { type: DataTypes.INTEGER, allowNull: false }
});

const HotelesModel = db.define('hoteles', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    cupo_maximo: { type: DataTypes.INTEGER, allowNull: false }
}, {
    timestamps: false
});

const TarifasModel = db.define('tarifas', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    hotel_id: { type: DataTypes.INTEGER, allowNull: false },
    tipo_habitacion_id: { type: DataTypes.INTEGER, allowNull: false },
    temporada: { type: DataTypes.STRING(10), allowNull: false },
    tarifa: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    num_personas: { type: DataTypes.INTEGER, allowNull: false }
});

const TiposHabitacionesModel = db.define('tipos_habitaciones', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false }
});

// Definir las relaciones entre los modelos
HotelesModel.hasMany(HabitacionesModel, { foreignKey: 'hotel_id' });
HabitacionesModel.belongsTo(HotelesModel, { foreignKey: 'hotel_id' });

HotelesModel.hasMany(TarifasModel, { foreignKey: 'hotel_id' });
TarifasModel.belongsTo(HotelesModel, { foreignKey: 'hotel_id' });

TiposHabitacionesModel.hasMany(HabitacionesModel, { foreignKey: 'tipo_habitacion_id' });
HabitacionesModel.belongsTo(TiposHabitacionesModel, { foreignKey: 'tipo_habitacion_id' });

TiposHabitacionesModel.hasMany(TarifasModel, { foreignKey: 'tipo_habitacion_id' });
TarifasModel.belongsTo(TiposHabitacionesModel, { foreignKey: 'tipo_habitacion_id' });

// Exportar los modelos
export default HotelesModel;
