const Sequelize = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize('hugo', 'root', process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.user = require('./user')(sequelize, Sequelize);
db.post = require('./posts')(sequelize, Sequelize);
db.comment = require('./comment')(sequelize, Sequelize);

db.post.hasMany(db.comment);
db.comment.belongsTo(db.post, {
  onDelete: "CASCADE",
});

module.exports = db; 