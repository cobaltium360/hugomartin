module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull:true
        }
    },{paranoid: true})
    return Post;
} 