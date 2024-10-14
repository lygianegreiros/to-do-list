// backend/routes/taskRoutes.js
const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Criar uma nova tarefa (CREATE)
router.post('/', async (req, res) => {
    const { title } = req.body;
    try {
        const newTask = await Task.create({ title });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar tarefa' });
    }
});

// Listar todas as tarefas (READ)
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
});

// Atualizar uma tarefa (UPDATE)
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { title, completed }, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar tarefa' });
    }
});

// Deletar uma tarefa (DELETE)
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: 'Tarefa deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar tarefa' });
    }
});

module.exports = router;
