const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodejs', 'root', 'rafael1306', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}