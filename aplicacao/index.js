// Declaração de variáveis
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

let tasks = [];

app.use(bodyParser.json());

// Esta é a rota para obter *todas* as tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Esta é a rota para adicionar uma task nova
app.post('/tasks', (req, res) => {
    const { description } = req.body;
    if (!description) {
        return res.status(400).json({ error: 'Descrição da tarefa é obrigatória' });
    }

    // Criação de uma nova tarefa
    const newTask = {
        id: tasks.length + 1,
        description,
        completed: false,
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Este é o processo de marcar uma tarefa como concluída
app.put('/tasks/:id/complete', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({ error: 'Task não encontrada.' });
    }

    task.completed = true;
    res.json(task);
});

// Rota para excluir uma tarefa
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    const deletedTask = tasks.splice(taskIndex, 1)[0];
    res.json(deletedTask);
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
