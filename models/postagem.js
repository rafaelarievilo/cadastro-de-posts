const db = require('./db')

const postagem = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    postagem: {
        type: db.Sequelize.TEXT
    }
})

//CRIAR TABELA
// pagamento.sync({force: true})

//alimentar a tabela

module.exports = postagem;