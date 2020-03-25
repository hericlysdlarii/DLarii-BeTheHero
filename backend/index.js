const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Oministack',
        aluno: 'Hériclys DLarii'
    });
});

app.listen(3333);