const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000...");
});

module.exports = { app }