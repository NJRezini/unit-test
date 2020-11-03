const alunos = [];

const addAluno = function(nome, sala, ano) {
    alunos.push({
        nome: nome,
        sala: sala,
        ano: ano
    });

    return {
        nome: nome,
        sala: sala,
        ano: ano
    };
}

const getAlunos = function() {
    return alunos;
};

module.exports = { addAluno, getAlunos }
