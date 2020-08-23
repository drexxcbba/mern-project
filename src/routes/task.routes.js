const { Router } = require('express');

const task = require('../models/task');

const act = Router();

act.get('/', async (req, res) => {
    await task.find((err, tasks) => {
        console.log(tasks);
        res.json(tasks);
    })
    .catch(err => console.log(err));
})

act.post('/', async (req, res) => {
    const { title, description } = req.body;
    const value = new task({ title, description });
    await value.save(); 
    console.log(value);  
    res.json({ status: 'Task saved' });
})

act.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const changes = { title, description };
    await task.findByIdAndUpdate(req.params.id, changes);
    res.json({ status: 'Changes successfully saved' });
})

act.delete('/:id', async (req, res) => {
    await task.findByIdAndDelete(req.params.id);
    res.json({ status: 'Item successfully deleted' });
})

act.get('/:id', async (req, res) => {
    const value = await task.findById(req.params.id);
    res.json(value);
})

module.exports = act;