const express = require('express');
const bodyParser = require('body-parser');

const app = express ();
const PORT = process.env.PORT || 3000;

let tasks = [];

app.user(bodyParser.json());

//esta aqui é a rota para obter *todas* as tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

//Esta é a rota para adicionar uma task nova
app.post('./tasks', (req, res) => {
    const {description } = req.body;
    if (!description) {
        return res.status(400).json({ error: 'Descrição da tarefa é obrigatória' });
    }

    const newTask = {
        id: tasks.length + 1,
        description,
        completed: false,
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});