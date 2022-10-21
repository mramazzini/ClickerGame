const { Model, DataTypes } = require('sequelize');
const { model } = require('../config/connection');
const sequelize = require('../config/connection');

class Note extends Model {}

Note.init(
    {
        time:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        note_val: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            },
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'note',
      }
)

module.exports = Note;