const User = require('./User');
const Achievement = require('./Achievement');
const Note = require('./Note');




Achievement.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Achievement, {
    foreignKey: 'user_id'
});

User.hasMany(Note,{
    foreignKey: 'user_id'
});

module.exports = { User,Achievement };