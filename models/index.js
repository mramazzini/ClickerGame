const User = require('./User');
const Achievement = require('./Achievement');




Achievement.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Achievement, {
    foreignKey: 'user_id'
})

module.exports = { User,Achievement };