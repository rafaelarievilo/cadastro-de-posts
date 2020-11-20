const express = require('express')
const app = express()
const postagem = require('./models/postagem')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const handlebars = require('express-handlebars')

app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))


app.get('/', (req, res) => {
    
    res.render('formulario')
})

app.get('/listar-postagens', async (req, res) => {
    await postagem.findAll({order: [['id', 'DESC']]}).then(async function(postagens) {
        await res.render('listar-postagens', {postagens: postagens})
    })
    
}) 

app.post('/postagens', async (req, res) => {
    try {
        await postagem.create({
            titulo: req.body.titulo,
            postagem: req.body.postagem
        }, res.redirect('listar-postagens'))
    } catch (error) {
        res.send("Erro:" + error)
    }
})

//deletar post
/* app.get('/del-post/:id', (req, res) => {
    postagem.destroy({
        where: {'id': req.params.id}
    }).then(function () {
        res.redirect('listar-postagens')
    }).catch(function(err) {
        res.send('Não foi possivel apagar esta postagem: ' + err)
    })
}) */

app.listen(8081, () => {console.log('Servidor Funcionando')})