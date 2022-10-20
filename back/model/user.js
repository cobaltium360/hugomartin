module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },    
    },{paranoid: true}) 
    return User;
}