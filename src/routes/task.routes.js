const { Router } = require('express');

const act = Router();

act.get('/', (req, res) => {
    res.send('hola');
})

module.exports = act;