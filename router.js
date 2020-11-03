const app = require('express');
const router = app.Router();
const controller = require('./controller');

router.get('/aluno', function (req, res) {
    res.status(200).json(controller.getAlunos());
});

router.post('/aluno', function (req, res) {
    res.status(201).json(controller.addAluno(req.body.nome, req.body.sala, req.body.ano));
});

module.exports = router;