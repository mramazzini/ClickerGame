const User = require('./User');
const Achievement = require('./Achievement');
const GameData = require('./GameData');



Achievement.belongsTo(User, {
    foreignKey: 'user_id'
})
GameData.belongsTo(User, {
    foreignKey: 'user_id'
})
User.hasMany(Achievement, {
    foreignKey: 'user_id'
})

module.exports = { User, GameData, Achievement };